// start an rds instance
// posgresql
// db.t4g.micro instances
// part of 6fire-backend vpc


variable "rds_master_username" {
  default = "postgres"
}
variable "rds_master_password" {
  default = "postgres"
}


resource "aws_db_subnet_group" "main" {
  name        = var.rds_cluster_identifier
  description = "6fire-backend-vpc"
  subnet_ids  = aws_subnet.private.*.id
  tags        = {
    project = "6fire"
  }
}


resource "aws_db_instance" "default" {
  deletion_protection     = false
  depends_on              = [aws_vpc.main, aws_db_subnet_group.main]
  instance_class          = "db.t3.small"
  engine                  = "postgres"
  engine_version          = "13.4"
  name                    = "db6fire"
  identifier              = "rds-6fire-backend"
  username                = var.rds_master_username
  password                = var.rds_master_password
  allocated_storage       = 15
  skip_final_snapshot     = true
  publicly_accessible     = false
  storage_type            = "gp2"
  backup_retention_period = 0
  vpc_security_group_ids  = [
    aws_security_group.rds_sg.id,
  ]
  db_subnet_group_name = aws_db_subnet_group.main.name
  tags                 = {
    project = "6fire"
  }
}


resource "aws_security_group" "rds_sg" {
  name        = "6fire-rds-sg"
  description = "6fire rds security group"
  vpc_id      = aws_vpc.main.id
  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["179.0.0.1/32"]
  }
}
