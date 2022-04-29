#TODO https://blog.gruntwork.io/how-to-manage-terraform-state-28f5697e68fa

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

  backend "s3" {
    bucket = "6fire-state"
    key    = "6fire/terraform.tfstate"
    region = "eu-west-1"
  }

}

provider "aws" {
  region = "eu-west-1"
}
