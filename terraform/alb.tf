# ALB Security group
# This is the group you need to edit if you want to restrict access to your application
resource "aws_security_group" "lb_api" {
  tags = {
    project = "6fire"
  }
  name        = "6fire-ecs-alb"
  description = "controls access to the ALB"
  vpc_id      = aws_vpc.main.id
  ingress {
    protocol    = "tcp"
    from_port   = 80
    to_port     = 3333
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
# Traffic to the ECS Cluster should only come from the ALB
resource "aws_security_group" "ecs_tasks" {
  tags = {
    project = "6fire"
  }
  name        = "6fire-ecs-tasks"
  description = "allow inbound access from the ALB only"
  vpc_id      = aws_vpc.main.id
  ingress {
    protocol        = "tcp"
    from_port       = 2000 // was 3000
    to_port         = 3333
    security_groups = [aws_security_group.lb_api.id]
  }
  egress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_alb" "api" {
  tags = {
    project = "6fire"
  }
  name            = "6fire-ecs-alb-api"
  subnets         = aws_subnet.public.*.id
  security_groups = [aws_security_group.lb_api.id]
}
resource "aws_alb" "client" {
  tags = {
    project = "6fire"
  }
  name            = "6fire-ecs-alb-client"
  subnets         = aws_subnet.public.*.id
  security_groups = [aws_security_group.lb_api.id]
}
resource "aws_alb" "dashboard" {
  tags = {
    project = "6fire"
  }
  name            = "6fire-ecs-alb-dashboard"
  subnets         = aws_subnet.public.*.id
  security_groups = [aws_security_group.lb_api.id]
}
resource "aws_alb_target_group" "api" {
  tags = {
    project = "6fire"
  }
  name        = "6fire-ecs-alb-tg-api"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"
}


resource "aws_alb_target_group" "client" {
  tags = {
    project = "6fire"
  }
  name        = "6fire-ecs-alb-tg-client"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"
}
resource "aws_alb_target_group" "dashboard" {
  tags = {
    project = "6fire"
  }
  name        = "6fire-ecs-alb-tg-dashboard"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"
}
# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "api" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.api.id
  port              = "80"
  protocol          = "HTTP"
  default_action {
    target_group_arn = aws_alb_target_group.api.id
    type             = "forward"
  }
}
// add 443
resource "aws_alb_listener" "ssl_api" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.api.id
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.default.arn
  default_action {
    target_group_arn = aws_alb_target_group.api.id
    type             = "forward"
  }
}

resource "aws_alb_listener" "client" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.client.id
  port              = "80"
  protocol          = "HTTP"
  default_action {
    target_group_arn = aws_alb_target_group.client.id
    type             = "forward"
  }
}
// add 443
resource "aws_alb_listener" "ssl_client" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.client.id
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.default.arn
  default_action {
    target_group_arn = aws_alb_target_group.client.id
    type             = "forward"
  }
}

resource "aws_alb_listener" "dashboard" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.dashboard.id
  port              = "80"
  protocol          = "HTTP"
  default_action {
    target_group_arn = aws_alb_target_group.dashboard.id
    type             = "forward"
  }
}

// add 443
resource "aws_alb_listener" "ssl_dashboard" {
  tags = {
    project = "6fire"
  }
  load_balancer_arn = aws_alb.dashboard.id
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = aws_acm_certificate.default.arn
  default_action {
    target_group_arn = aws_alb_target_group.dashboard.id
    type             = "forward"
  }
}
