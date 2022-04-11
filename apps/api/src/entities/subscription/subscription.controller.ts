import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CRUDController } from '../../types';

const prisma = new PrismaClient();

// model Subscription {
//   id               Int                @id @default(autoincrement())
//   name             String
//   description      String
//   price            Int
//   level            Int                @default(0)
//   createdAt        DateTime           @default(now())
//   updatedAt        DateTime           @default(now())
//   UserSubscription UserSubscription[]
// }
//
// model UserSubscription {
//   id             Int          @id @default(autoincrement())
//   userId         Int
//   subscriptionId Int
//   createdAt      DateTime     @default(now())
//   updatedAt      DateTime     @default(now())
//   User           User         @relation(fields: [userId], references: [id])
//   Subscription   Subscription @relation(fields: [subscriptionId], references: [id])
// }
//
// model User {
//   id                Int                 @id @default(autoincrement())
//   userId            String              @unique @default(uuid())
//   firstName         String
//   lastName          String
//   email             String
//   password          String
//   telephone         String
//   countryId         Int
//   createdAt         DateTime            @default(now())
//   updatedAt         DateTime            @default(now())
//   isAdmin           Boolean             @default(false)
//   verifiedEmail     Boolean             @default(false)
//   verifiedPhone     Boolean             @default(false)
//   banned            Boolean             @default(false)
//   country           Country             @relation(fields: [countryId], references: [id])
//   VerificationCodes VerificationCodes[]
//   TraderFollows     TraderFollows[]
//   UserSubscription  UserSubscription[]
// }

export default class SubscriptionController extends CRUDController {
    static async getAll(req: Request, res: Response) {
        try {
            const subscriptions = await prisma.subscription.findMany({
                include: {
                    UserSubscription: true,
                },
            });
            res.json(subscriptions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const subscription = await prisma.subscription.findFirst({
                where: {
                    id: +id,
                },
                include: {
                    UserSubscription: true,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { name, description, price, level } = req.body;
            const subscription = await prisma.subscription.create({
                data: {
                    name,
                    description,
                    price,
                    level,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, description, price, level } = req.body;
            const subscription = await prisma.subscription.update({
                where: {
                    id: +id,
                },
                data: {
                    name,
                    description,
                    price,
                    level,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const subscription = await prisma.subscription.delete({
                where: {
                    id: +id,
                },
            });
            res.json(subscription);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
