variable "domains" {
  type    = list(string)
  default = [
    "6fireinvest.fr",
    "6fireinvest.com",
  ]
}

variable "subdomains" {
  type    = list(string)
  default = [
    "www",
    "api",
    "dashboard",
  ]
}

data "aws_route53_zone" "zone" {
  for_each     = toset(var.domains)
  name         = each.value
  private_zone = false
  #  provider     = aws.account_route53
}


resource "aws_route53_record" "default" {
  for_each = data.aws_route53_zone.zone
  zone_id  = each.value.zone_id
  name     = each.value.name
  type     = "A"

  alias {
    evaluate_target_health = true
    name                   = aws_alb.client.dns_name
    zone_id                = aws_alb.client.zone_id
  }
  #  provider = aws.account_route53

}

resource "aws_route53_record" "www" {
  for_each = data.aws_route53_zone.zone
  zone_id  = each.value.zone_id
  name     = join(".", ["www", each.value.name])
  type     = "A"

  alias {
    evaluate_target_health = true
    name                   = aws_alb.client.dns_name
    zone_id                = aws_alb.client.zone_id
  }
  #  provider = aws.account_route53

}

resource "aws_route53_record" "api" {
  for_each = data.aws_route53_zone.zone
  zone_id  = each.value.zone_id
  name     = join(".", ["api", each.value.name])
  type     = "A"

  alias {
    evaluate_target_health = true
    name                   = aws_alb.api.dns_name
    zone_id                = aws_alb.api.zone_id
  }
  #  provider = aws.account_route53

}

resource "aws_route53_record" "dashboard" {
  for_each = data.aws_route53_zone.zone
  zone_id  = each.value.zone_id
  name     = join(".", ["dashboard", each.value.name])
  type     = "A"

  alias {
    evaluate_target_health = true
    name                   = aws_alb.dashboard.dns_name
    zone_id                = aws_alb.dashboard.zone_id
  }
  #  provider = aws.account_route53
}
