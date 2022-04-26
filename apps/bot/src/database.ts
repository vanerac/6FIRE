import { PrismaClient } from '@prisma/client';
import { Trader } from '@shared/services';
import * as Sentry from '@sentry/node';

const prisma = new PrismaClient();

export default class Database {
    // Get currated Traders
    static async getCuratedTraders(): Promise<Trader[]> {
        const transaction = Sentry.startTransaction({
            op: 'db',
            name: 'get followers',
        });
        try {
            return (await prisma.curatedTrader.findMany({
                where: {
                    displayed: true,
                },
                include: {
                    TraderFollows: true,
                },
            })) as unknown as Trader[];
        } finally {
            transaction.finish();
        }
    }

    static async getFollowers(traderId: string) {
        const transaction = Sentry.startTransaction({
            op: 'db',
            name: 'get followers',
        });
        try {
            return await prisma.traderFollows.findMany({
                where: {
                    traderId: +traderId, // Todo is this right ?
                },
                select: {
                    User: {
                        select: {
                            userId: true,
                            telegramId: true,
                        },
                    },
                },
            });
        } finally {
            transaction.finish();
        }
    }
}
