resource "aws_security_group" "acesso-ssh" {
  name        = "acesso-ssh"
  description = "Acesso SSH"

  ingress = [
    {
      description      = "SSH from VPC"
      from_port        = 22
      to_port          = 22
      protocol         = "tcp"
      cidr_blocks      = var.cidrs_acesso_remoto
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = true
    }
  ]

  tags = {
    Name = "ssh"
  }
}

resource "aws_security_group" "acesso-ssh-us-east-2" {
  provider    = aws.us-east-2
  name        = "acesso-ssh"
  description = "Acesso SSH"

  ingress = [
    {
      description      = "SSH from VPC"
      from_port        = 22
      to_port          = 22
      protocol         = "tcp"
      cidr_blocks      = var.cidrs_acesso_remoto
      ipv6_cidr_blocks = []
      prefix_list_ids  = []
      security_groups  = []
      self             = true
    }
  ]

  tags = {
    Name = "ssh"
  }
}