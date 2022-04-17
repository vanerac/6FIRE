import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { checkPassword, generateToken, hashPassword } from '../../tools/auth.tools';

const client = new PrismaClient();

///enum VerificationType {
//   EMAIL
//   PHONE
// }
// model User {
//     id                Int                 @id @default(autoincrement())
//     userId            String              @unique @default(uuid())
//     firstName         String
//     lastName          String
//     email             String
//     password          String
//     telephone         String
//     countryId         Int
//     createdAt         DateTime            @default(now())
//     updatedAt         DateTime            @default(now())
//     isAdmin           Boolean             @default(false)
//     verifiedEmail     Boolean             @default(false)
//     verifiedPhone     Boolean             @default(false)
//     banned            Boolean             @default(false)
//     country           Country             @relation(fields: [countryId], references: [id])
//     VerificationCodes VerificationCodes[]
//     TraderFollows     TraderFollows[]
//     UserSubscription  UserSubscription[]
// }
//
// model VerificationCodes {
//     id        Int              @id @default(autoincrement())
//     userId    Int
//     code      Int
//     type      VerificationType
//     createdAt DateTime         @default(now())
//     updatedAt DateTime         @default(now())
//     User      User             @relation(fields: [userId], references: [id])
// }

export default class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { email, password, firstName, lastName, countryId, telephone, confirm_password, cgu } = req.body;

            if (
                [cgu, email, password, confirm_password, firstName, lastName, countryId, telephone].includes(undefined)
            ) {
                return res.status(400).json({
                    message: 'Missing required fields',
                });
            }

            const user = await client.user.create({
                data: {
                    firstName,
                    lastName,
                    telephone,
                    country: {
                        connect: {
                            id: +countryId,
                        },
                    },
                    email,
                    password: hashPassword(password),
                    // cgu
                },
            });

            // create verification codes
            // one for email
            // one for sms

            // send email with aws sns and sms with smspartenr

            return res.status(201);
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const user = await client.user.findFirst({
                where: {
                    email,
                },
                select: {
                    id: true,
                    email: true,
                    password: true,
                },
            });

            if (!user) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            if (!checkPassword(password, user.password)) {
                return res.status(401).json({
                    message: 'Invalid credentials',
                });
            }

            // todo did the user verify ?
            // resend email if not verified

            delete user.password;

            const token = generateToken(user);

            return res.json({
                token,
            });
        } catch (error) {
            res.status(500).json({
                message: error.message,
            });
        }
    }

    static async logout(req: Request, res: Response) {
        req.session = null;
        res.sendStatus(200);
    }

    static async verify(req: Request, res: Response) {
        // verify with code in query
        // compare code with db
        // codes expires in 15m
    }

    static async verifyNew(req: Request, res: Response) {
        // creates a new verification code for the user
    }
}
