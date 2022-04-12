#// ressource lb
#
#resource "aws_subnet" "api" {
#  vpc_id     = aws_vpc.api.id
#  cidr_block = "10.0.0.0/28"
#}
#
#resource "aws_subnet" "client" {
#  vpc_id     = aws_vpc.client.id
#  cidr_block = "10.0.0.0/28"
#}
#
#resource "aws_subnet" "dashboard" {
#  vpc_id     = aws_vpc.dashboard.id
#  cidr_block = "10.0.0.0/28"
#}
#
#
#//lb
##resource "aws_lb" "default" {
##  name               = "default-lb"
##  internal           = false
##  subnets            = [aws_subnet.client.id, aws_subnet.dashboard.id, aws_subnet.api.id]
##  load_balancer_type = "network"
##  idle_timeout       = 60
##}
#
#
#resource "aws_lb" "api" {
#  name               = "api-lb"
#  internal           = true
#  subnets            = [aws_subnet.api.id]
#  load_balancer_type = "network"
#}
#
#// client
#resource "aws_lb" "client" {
#  name               = "client-lb"
#  internal           = true
#  subnets            = [aws_subnet.client.id]
#  load_balancer_type = "network"
#}
#
#//dashboard
#resource "aws_lb" "dashboard" {
#  name               = "dashboard-lb"
#  internal           = true
#  subnets            = [aws_subnet.dashboard.id]
#  load_balancer_type = "network"
#}
#
#// lb target group
#resource "aws_lb_target_group" "api" {
#  name     = "api-target-group"
#  port     = 80
#  protocol = "HTTP"
#  vpc_id   = aws_vpc.api.id
#}
#
#// client
#resource "aws_lb_target_group" "client" {
#  name     = "client-target-group"
#  port     = 80
#  protocol = "HTTP"
#  vpc_id   = aws_vpc.client.id
#}
#
#resource "aws_lb_target_group" "dashboard" {
#  name     = "dashboard-target-group"
#  port     = 80
#  protocol = "HTTP"
#  vpc_id   = aws_vpc.dashboard.id
#}
#
#// lb listener
#resource "aws_lb_listener" "api" {
#  load_balancer_arn = aws_lb.client.id
#  port              = "80"
#  protocol          = "TCP"
#  default_action {
#    target_group_arn = aws_lb_target_group.api.id
#    type             = "forward"
#  }
#}
#
#// client listener
#resource "aws_lb_listener" "client" {
#  load_balancer_arn = aws_lb.client.id
#  port              = "80"
#  protocol          = "TCP"
#  default_action {
#    target_group_arn = aws_lb_target_group.client.id
#    type             = "forward"
#  }
#}
#
#// dashboard
#resource "aws_lb_listener" "dashboard" {
#  load_balancer_arn = aws_lb.client.id
#  port              = "80"
#  protocol          = "TCP"
#  default_action {
#    target_group_arn = aws_lb_target_group.dashboard.id
#    type             = "forward"
#  }
#}
#
#// elastic ip points to default lb
#resource "aws_eip" "eip" {
#  vpc = true
#}
