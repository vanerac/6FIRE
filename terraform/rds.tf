// start an rds instance
// posgresql
// db.t4g.micro instances
// part of 6fire-backend vpc


resource "aws_rds_cluster" "default" {
  tags = {
    project = "6fire"
  }
  cluster_identifier  = var.rds_cluster_identifier
  master_username     = "root"
  master_password     = "password"
  database_name       = var.rds_db_name
  skip_final_snapshot = true
  storage_encrypted   = true
  engine              = "aurora-postgresql"
  engine_version      = "13.4"
  deletion_protection = false
  #  vpc_security_group_ids = [
  #    aws_vpc.main.default_security_group_id
  #  ]
  #  subnet_group_name = aws_subnet.private.arn

}
