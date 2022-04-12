// start an rds instance
// posgresql
// db.t4g.micro instances
// part of 6fire-backend vpc


resource "aws_rds_cluster" "default" {
  cluster_identifier  = var.rds_cluster_identifier
  master_username     = "root"
  master_password     = "password"
  database_name       = var.rds_db_name
  skip_final_snapshot = true
  storage_encrypted   = true
  engine              = "aurora-postgresql"
  engine_version      = "13"
  deletion_protection = false
  
}
