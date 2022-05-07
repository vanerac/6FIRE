import * as aws from 'aws-sdk';
import configuration from '../../configuration';
import axios from 'axios';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function AWSsendEmail({
    email,
    subject,
    message,
    htmlMessage,
}: {
    email: string;
    subject: string;
    message?: string;
    htmlMessage: string;
}) {
    // SES Email

    const ses = new aws.SES({
        apiVersion: '2010-12-01',
        region: 'eu-west-1',
        accessKeyId: configuration.AWS_ACCESS_KEY_ID,
        secretAccessKey: configuration.AWS_SECRET_ACCESS_KEY,
    });

    const params = {
        Destination: {
            ToAddresses: [email],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: htmlMessage || message,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject,
            },
        },
        Source: configuration.EMAIL_SENDER,
    };

    return ses.sendEmail(params).promise();
}

export async function AWSsendSMS({ phoneNumber, message }: { phoneNumber: string; message: string }) {
    // SNS SMS

    const sns = new aws.SNS({
        apiVersion: '2010-03-31',
        region: 'eu-west-3',
    });

    const params = {
        Message: message,
        PhoneNumber: phoneNumber,
    };

    return sns.publish(params).promise();
}

export async function sendSMS({ phoneNumber, message }: { phoneNumber: string; message: string }) {
    const route = 'http://api.smspartner.fr/v1/send';
    // between 3 and 11 characters

    const smsConfig = await prisma.config.findFirst({
        where: {
            key: 'smsTrigger',
        },
    });
    if (smsConfig) {
        const { value: smsTrigger } = smsConfig;
        if (!smsTrigger) {
            throw new Error('SMS disabled');
        }
    }

    const isValidName = configuration.SMS_SENDER.length >= 3 && configuration.SMS_SENDER.length <= 11;
    const body = {
        apiKey: configuration.SMS_API_KEY,
        phoneNumbers: phoneNumber,
        sender: isValidName ? configuration.SMS_SENDER : undefined,
        gamme: 1, // 2 = standard, 1 = premium
        message: message,
        // sandbox: process.env.NODE_ENV !== 'production',
    };

    await axios.post(route, body);
}
