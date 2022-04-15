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

resource "aws_cloudwatch_log_group" "api" {
  name = "6fire-api"
}

resource "aws_cloudwatch_log_group" "client" {
  name = "6fire-client"
}

resource "aws_cloudwatch_log_group" "dashboard" {
  name = "6fire-dashboard"
}


resource "aws_iam_role" "ecs_task_role" {
  name               = "ecs_task_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
            "ecs-tasks.amazonaws.com",
            "ecs.amazonaws.com",
            "batch.amazonaws.com"
        ]
      },
      "Effect": "Allow"
    }
  ]
}
EOF
  tags               = {
    project = "6fire"
  }
}

resource "aws_iam_role_policy" "ecs_task_role" {
  name   = "ecs_task_role"
  role   = aws_iam_role.ecs_task_role.id
  // attach AmazonEC2ContainerRegistryFullAccess policy to ecs_task_role
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:GetRepositoryPolicy",
        "ecr:DescribeRepositories",
        "ecr:ListImages",
        "ecr:DescribeImages"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role" "esc_execution_role" {
  name               = "ecs_execution_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": [
            "ecs.amazonaws.com",
            "ecs-tasks.amazonaws.com",
            "batch.amazonaws.com"
        ]
      },
      "Effect": "Allow"
    }
  ]
}
EOF
  tags               = {
    project = "6fire"
  }
}

resource "aws_iam_role_policy" "esc_execution_role" {
  name   = "ecs_execution_role"
  role   = aws_iam_role.esc_execution_role.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecs:StartTask",
        "ecs:StopTask",
        "ecs:DescribeTasks",
        "ecs:DescribeContainerInstances",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

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
    aws_ecr_repository.api,
    aws_db_instance.default
  ]
  execution_role_arn       = aws_iam_role.esc_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn
  family                   = "${var.ecs_task_definition_family}-api"
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.api.repository_url}:latest",
    "memory": 1024,
    "name": "api",
    "networkMode": "awsvpc",
    "awsvpcConfiguration": {
      "securityGroups": [
        "${aws_security_group.ecs_tasks.id}"
      ],
      "assignPublicIp": "ENABLED"
    },
    "portMappings": [
      {
        "containerPort": 3333,
        "hostPort": 3333
      }
    ],
    "environment": [
      {
        "name": "DB_HOST",
        "value": "${aws_db_instance.default.address}"
      },
      {
        "name": "DB_PORT",
        "value": "${aws_db_instance.default.port}"
      },
      {
        "name": "DB_USER",
        "value": "${aws_db_instance.default.username}"
      },
      {
        "name": "DB_PASSWORD",
        "value": "${aws_db_instance.default.password}"
      },
      {
        "name": "DB_NAME",
        "value": "6fire"
      },
      {
        "name": "DATABASE_URL",
        "value": "postgres://${aws_db_instance.default.username}:${aws_db_instance.default.password}@${aws_db_instance.default.address}:${aws_db_instance.default.port}/${aws_db_instance.default.name}"
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${aws_cloudwatch_log_group.api.name}",
        "awslogs-region": "eu-west-3",
        "awslogs-stream-prefix": "api"
      }
    }
  }
]
DEFINITION
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  // add cloudwatch stream

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
  execution_role_arn       = aws_iam_role.esc_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.client.repository_url}:latest",
    "memory": 1024,
    "name": "client",
    "networkMode": "awsvpc",
    "awsvpcConfiguration": {
      "securityGroups": [
        "${aws_security_group.ecs_tasks.id}"
      ],
      "assignPublicIp": "ENABLED"
    },
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${aws_cloudwatch_log_group.client.name}",
        "awslogs-region": "eu-west-3",
        "awslogs-stream-prefix": "client"
      }
    }
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
  execution_role_arn       = aws_iam_role.esc_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn
  container_definitions    = <<DEFINITION
[
  {
    "cpu": 512,
    "essential": true,
    "image": "${aws_ecr_repository.dashboard.repository_url}:latest",
    "memory": 1024,
    "name": "dashboard",
    "networkMode": "awsvpc",
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ],
    "logConfiguration": {
      "logDriver": "awslogs",
      "options": {
        "awslogs-group": "${aws_cloudwatch_log_group.dashboard.name}",
        "awslogs-region": "eu-west-3",
        "awslogs-stream-prefix": "dashboard"
      }
    }
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
  platform_version = "1.3.0"
  tags             = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-api"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = flatten([aws_subnet.public.*.id, aws_subnet.private.*.id])
    assign_public_ip = true
  }
  load_balancer {
    target_group_arn = aws_alb_target_group.app.id
    container_name   = "api"
    container_port   = 3333
  }
  depends_on = [
    aws_alb_listener.front_end,
    aws_ecr_repository.api,
    aws_ecs_task_definition.api
  ]
}

resource "aws_ecs_service" "client" {
  platform_version = "1.3.0"
  tags             = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-client"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.client.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = aws_subnet.public.*.id
    assign_public_ip = true
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
  platform_version = "1.3.0"
  tags             = {
    project = "6fire"
  }
  name            = "${var.ecs_service_name}-dashboard"
  cluster         = aws_ecs_cluster.default.id
  task_definition = aws_ecs_task_definition.dashboard.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = aws_subnet.public.*.id
    assign_public_ip = true
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
