import { PrismaClient } from '@prisma/client';
import { Trader } from '@shared/services';

const prisma = new PrismaClient();

export default class Database {
    // Get currated Traders
    static async getCuratedTraders(): Promise<Trader[]> {
        return (await prisma.curatedTrader.findMany({
            where: {
                displayed: true,
            },
            include: {
                TraderFollows: true,
            },
        })) as unknown as Trader[];
    }

    static async getFollowers(traderId: string) {
        return await prisma.traderFollows.findMany({
            where: {
                traderId: +traderId, // Todo is this right ?
            },
            select: {
                User: {
                    select: {
                        userId: true,
                    },
                },
            },
        });
    }
}
