variable "domains" {
  type = list(string)
  default = [
    "6fireinvest.fr",
    "6fireinvest.com",
  ]
}

variable "subdomains" {
  type = list(string)
  default = [
    "www",
    "api",
    "dashboard",
  ]
}

data "aws_route53_zone" "com" {
  name = "6fireinvest.com"
}

data "aws_route53_zone" "fr" {
  name = "6fireinvest.fr"
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
    name                   = aws_lb.client.dns_name
    zone_id                = aws_lb.client.zone_id
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
    name                   = aws_lb.client.dns_name
    zone_id                = aws_lb.client.zone_id
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
    name                   = aws_lb.api.dns_name
    zone_id                = aws_lb.api.zone_id
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
    name                   = aws_lb.dashboard.dns_name
    zone_id                = aws_lb.dashboard.zone_id
  }
  #  provider = aws.account_route53
}


resource "aws_acm_certificate" "com" {
  domain_name       = "6fireinvest.com"
  validation_method = "DNS"
  subject_alternative_names = [
    "*.6fireinvest.com",
  ]
  tags = {
    project = "6fire"
  }
  #  provider = aws.account_acm
}
resource "aws_acm_certificate" "fr" {
  domain_name       = "6fireinvest.fr"
  validation_method = "DNS"
  subject_alternative_names = [
    "*.6fireinvest.fr",
  ]
  tags = {
    project = "6fire"
  }
  #  provider = aws.account_acm
}


// redirect fr to 6fireinvest.com
#resource "aws_route53_record" "fr" {
#  name    = "6fireinvest.fr"
#  type    = "A"
#  zone_id = data.aws_route53_zone.fr.zone_id
#  records = [
#    aws_acm_certificate.default.domain_name,
#  ]
#
#}

resource "aws_route53_record" "ssl_com" {
  for_each = {
    for dvo in aws_acm_certificate.com.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }


  zone_id = data.aws_route53_zone.com.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [
    each.value.record,
  ]

  allow_overwrite = true
}

resource "aws_route53_record" "ssl_fr" {
  for_each = {
    for dvo in aws_acm_certificate.fr.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }


  zone_id = data.aws_route53_zone.fr.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [
    each.value.record,
  ]

  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "com" {
  certificate_arn         = aws_acm_certificate.com.arn
  validation_record_fqdns = [for record in aws_route53_record.ssl_com : record.fqdn]
}

resource "aws_acm_certificate_validation" "fr" {
  certificate_arn         = aws_acm_certificate.fr.arn
  validation_record_fqdns = [for record in aws_route53_record.ssl_fr : record.fqdn]
}
