// Efs for containers

resource "aws_subnet" "storage" {
  vpc_id            = aws_vpc.main.id
  availability_zone = "eu-west-3a"
  cidr_block        = cidrsubnet(aws_vpc.main.cidr_block, 8, var.az_count + 10)
  tags              = {
    project = "6fire"
  }
}


resource "aws_efs_file_system" "main" {
  creation_token         = "6fire-efs-token"
  performance_mode       = "generalPurpose"
  availability_zone_name = "eu-west-3a"
  tags                   = {
    project = "6fire"
  }
}

resource "aws_efs_access_point" "storage" {
  file_system_id = aws_efs_file_system.main.id
  posix_user {
    gid = 1000
    uid = 1000
  }
  root_directory {
    path = "/upload"
    creation_info {
      owner_gid   = 1000
      owner_uid   = 1000
      permissions = 755
    }
  }
  tags = {
    project = "6fire"
  }
}


resource "aws_efs_mount_target" "main" {
  file_system_id  = aws_efs_file_system.main.id
  subnet_id       = aws_subnet.storage.id
  security_groups = [aws_security_group.lb_api.id]
}
