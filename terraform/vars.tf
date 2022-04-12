// Ecr variables
variable "ecr_name_api" {
  description = "The name of the API ECR repository"
  type        = string
  default     = "6fire-api"
}

variable "ecr_name_dashboard" {
  description = "The name of the dashboard"
  type        = string
  default     = "6fire-dashboard"
}

variable "ecr_name_client" {
  description = "The name of the client"
  type        = string
  default     = "6fire-client"
}


// ecs variables
variable "ecs_cluster_name" {
  description = "The name of the ECS cluster"
  type        = string
  default     = "6fire-ecs-cluster"
}

variable "ecs_service_name" {
  description = "The name of the ECS service"
  type        = string
  default     = "6fire-ecs-service"
}

variable "ecs_task_definition_name" {
  description = "The name of the ECS task definition"
  type        = string
  default     = "6fire-ecs-task-definition"
}

variable "ecs_task_definition_family" {
  description = "The family of the ECS task definition"
  type        = string
  default     = "6fire-ecs-task-definition-family"
}


// iam variables
variable "iam_role_name" {
  description = "The name of the IAM role"
  type        = string
  default     = "6fire-iam-role"
}


// ec2 variables

variable "ec2_instance_type" {
  description = "The type of the EC2 instance"
  type        = string
  default     = "t2.micro"
}

variable "lb_name" {
  description = "The name of the ELB"
  type        = string
  default     = "6fire-lb"
}

variable "lb_port" {
  description = "The port of the ELB"
  type        = string
  default     = "80"
}

variable "lb_scheme" {
  description = "The scheme of the ELB"
  type        = string
  default     = "http"
}

//rds variables
variable "rds_db_name" {
  description = "The name of the RDS database"
  type        = string
  default     = "app"
}

variable "rds_cluster_identifier" {
  description = "The identifier of the RDS cluster"
  type        = string
  default     = "rds-6fire-cluster"
}
