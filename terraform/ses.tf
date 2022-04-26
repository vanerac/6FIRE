data "aws_region" "current" {}
data "aws_caller_identity" "current" {}


data "aws_route53_zone" "email" {
  name = "6fireinvest.com"
  tags = {
    project = "6fire"
  }
}

resource "aws_ses_domain_identity" "primary" {
  domain = data.aws_route53_zone.email.name
}


resource "aws_route53_record" "ses_verif" {
  zone_id = data.aws_route53_zone.email.zone_id
  name    = "_amazonses.${aws_ses_domain_identity.primary.id}"
  type    = "TXT"
  ttl     = "600"
  records = [aws_ses_domain_identity.primary.verification_token]
}

resource "aws_ses_domain_identity_verification" "ses_verif" {
  domain = aws_ses_domain_identity.primary.id

  depends_on = [aws_route53_record.ses_verif]
}

resource "aws_route53_record" "email" {
  zone_id = data.aws_route53_zone.email.zone_id
  name    = data.aws_route53_zone.email.name
  type    = "MX"
  ttl     = "600"
  records = ["10 inbound-smtp.${data.aws_region.current.name}.amazonaws.com"]
}

resource "aws_ses_email_identity" "email" {
  email = "no-reply@6fireinvest.com"
}


// dkim
resource "aws_ses_domain_dkim" "email" {
  domain = data.aws_route53_zone.email.name

}

resource "aws_route53_record" "email_dkim_records" {
  count   = 3
  zone_id = data.aws_route53_zone.email.zone_id
  name    = "${element(aws_ses_domain_dkim.email.dkim_tokens, count.index)}._domainkey.${data.aws_route53_zone.email.name}"
  type    = "CNAME"
  ttl     = "300"
  records = [
    "${element(aws_ses_domain_dkim.email.dkim_tokens, count.index)}.dkim.amazonses.com",
  ]
}
