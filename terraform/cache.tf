resource "aws_security_group" "redis" {
  name        = "redis-cache"
  description = "Redis cache security group"
  vpc_id      = aws_vpc.main.id
  ingress {
    protocol    = "tcp"
    from_port   = 6379
    to_port     = 6379
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    protocol    = "tcp"
    from_port   = 6379
    to_port     = 6379
    cidr_blocks = ["0.0.0.0/0"]
  }
  tags = {
    project = "6fire"
  }
}

resource "aws_elasticache_subnet_group" "default" {
  name        = "cache6fire"
  description = "Test Subnet Group"
  subnet_ids  = aws_subnet.private.*.id
  tags = {
    project = "6fire"
  }
}


resource "aws_elasticache_cluster" "default" {
  cluster_id           = "cluster6fire"
  engine               = "redis"
  node_type            = "cache.m4.xlarge"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis3.2"
  engine_version       = "3.2.10"
  port                 = 6379
  security_group_ids = [
    aws_security_group.redis.id,
  ]
  subnet_group_name = aws_elasticache_subnet_group.default.name
  tags = {
    project = "6fire"
  }
}

output "cluster_id" {
  value = aws_elasticache_cluster.default.cluster_address
}
#
#resource "aws_elasticache_replication_group" "default" {
#  replication_group_id          = "6fire-redis-rg"
#  replication_group_description = "6fire redis replication group"
#  node_type                     = "cache.m4.large"
#  number_cache_clusters         = 1
#  port                          = 6379
#  primary_cluster_id            = aws_elasticache_cluster.default.id
#  automatic_failover_enabled    = true
#  security_group_ids            = [
#    aws_security_group.redis.id,
#  ]
#  tags = {
#    project = "6fire"
#  }
#}
