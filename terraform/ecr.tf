// setup ecr if it doesn't exist
// use name ecr-6fire

resource "aws_ecr_repository" "api" {
  tags = {
    project = "6fire"
  }
  name = var.ecr_name_api
}

resource "aws_ecr_repository" "dashboard" {
  tags = {
    project = "6fire"
  }
  name = var.ecr_name_dashboard
}

resource "aws_ecr_repository" "client" {
  tags = {
    project = "6fire"
  }
  name = var.ecr_name_client
}
