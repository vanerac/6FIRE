// setup ecr if it doesn't exist
// use name ecr-6fire

resource "aws_ecr_repository" "api" {
  name = var.ecr_name_api
}

resource "aws_ecr_repository" "dashboard" {
  name = var.ecr_name_dashboard
}

resource "aws_ecr_repository" "client" {
  name = var.ecr_name_client
}
