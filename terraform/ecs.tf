// create ecs cluster
// create ecs service
// create ecs task definition
// name var.NAME


#data "aws_ecr_repository" "api" {
#  depends_on = [
#    aws_ecr_repository.api
#  ]
#  name = var.ecr_name_api
#}
#
#data "aws_ecr_repository" "client" {
#  depends_on = [
#    aws_ecr_repository.client
#  ]
#  name = var.ecr_name_client
#}
#
#data "aws_ecr_repository" "dashboard" {
#  depends_on = [
#    aws_ecr_repository.dashboard
#  ]
#  name = var.ecr_name_dashboard
#}

#data "aws_iam_role" "default" {
#  name = var.iam_role_name
#}

resource "aws_ecs_cluster" "default" {
  tags = {
    project = "6fire"
  }
  name = var.ecs_cluster_name
}

resource "aws_ecs_task_definition" "api" {
  tags = {
    project = "6fire"
  }
  depends_on = [
    aws_ecr_repository.api
  ]
  family                   = "${var.ecs_task_definition_family}-api"
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.api.arn}/6fire-api:latest",
    "memory": 1024,
    "name": "api",
    "networkMode": "awsvpc",
    "portMappings": [
      {
        "containerPort": 3333,
        "hostPort": 3333
      }
    ]
  }
]
DEFINITION
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
}

resource "aws_ecs_task_definition" "client" {
  tags = {
    project = "6fire"
  }
  depends_on = [
    aws_ecr_repository.client,
    aws_ecr_repository.api
  ]

  family                   = "${var.ecs_task_definition_family}-client"
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.client.arn}/6fire-client:latest",
    "memory": 1024,
    "name": "client",
    "networkMode": "awsvpc",
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ]
  }
]
DEFINITION
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
}

resource "aws_ecs_task_definition" "dashboard" {
  tags = {
    project = "6fire"
  }
  depends_on = [
    aws_ecr_repository.api, aws_ecr_repository.dashboard
  ]
  family                   = "${var.ecs_task_definition_family}-dashboard"
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.dashboard.arn}/6fire-dashboard:latest",
    "memory": 1024,
    "name": "dashboard",
    "networkMode": "awsvpc",
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ]
  }
]
DEFINITION
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024

}


// services
// API (backend)
// Client (frontend)
// Dashboard (frontend)

resource "aws_ecs_service" "api" {
  tags = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-api"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [aws_security_group.ecs_tasks.id]
    subnets         = aws_subnet.public.*.id
  }
  load_balancer {
    target_group_arn = aws_alb_target_group.app.id
    container_name   = "api"
    container_port   = 3333
  }
  depends_on = [
    aws_alb_listener.front_end,
  ]
}

resource "aws_ecs_service" "client" {
  tags = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-client"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.client.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [aws_security_group.ecs_tasks.id]
    subnets         = aws_subnet.public.*.id
  }
  load_balancer {
    target_group_arn = aws_alb_target_group.app.id
    container_name   = "client"
    container_port   = 3000
  }
  depends_on = [
    aws_alb_listener.front_end,
  ]
}

resource "aws_ecs_service" "dashboard" {
  tags = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-dashboard"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.dashboard.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [aws_security_group.ecs_tasks.id]
    subnets         = aws_subnet.public.*.id
  }
  load_balancer {
    target_group_arn = aws_alb_target_group.app.id
    container_name   = "dashboard"
    container_port   = 3000
  }
  depends_on = [
    aws_alb_listener.front_end,
  ]
}
