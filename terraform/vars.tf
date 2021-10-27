variable "amis" {
    type = map

    default = {
        "sa-east-1" = "ami-054a31f1b3bf90920"
        "us-east-2" = "ami-00dfe2c7ce89a450b"
    }
}

variable "cidrs_acesso_remoto" {
    type = list
    
    default = ["45.4.35.159/32"]
}

variable "key_name" {
    default = "terraform"
}