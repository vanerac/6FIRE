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

data "aws_route53_zone" "test" {
  name = "6fireinvest.com"
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


resource "aws_acm_certificate" "default" {
  domain_name               = "6fireinvest.com"
  validation_method         = "DNS"
  subject_alternative_names = [
    "*.6fireinvest.com",
  ]
  tags = {
    project = "6fire"
  }
  #  provider = aws.account_acm
}


resource "aws_route53_record" "ssl" {
  for_each = {
  for dvo in aws_acm_certificate.default.domain_validation_options : dvo.domain_name => {
    name   = dvo.resource_record_name
    record = dvo.resource_record_value
    type   = dvo.resource_record_type
  }
  }


  zone_id = data.aws_route53_zone.test.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [
    each.value.record,
  ]

  allow_overwrite = true
}


resource "aws_acm_certificate_validation" "default" {
  certificate_arn         = aws_acm_certificate.default.arn
  validation_record_fqdns = [for record in aws_route53_record.ssl : record.fqdn]
}
