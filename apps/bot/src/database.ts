import { PrismaClient } from '@prisma/client';

export type Trader = {
    id?: string;
    name?: string;
    clientId?: string;
    displayed?: boolean | null;
    createdAt?: string | null;
    updatedAt?: string | null;
};

const prisma = new PrismaClient();

export default class Database {
    // Get currated Traders
    static async getCuratedTraders(): Promise<Trader[]> {
        return (await prisma.curatedTrader.findMany({
            where: {
                displayed: true,
            },
            select: {
                id: true,
                clientId: true,
                TraderFollows: {
                    select: {
                        userId: true,
                    },
                },
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
                        telegramId: true,
                    },
                },
            },
        });
    }

    static async setUpdateChatId(code: string, chatId: number) {
        return await prisma.user.update({
            where: {
                telegramLinkingCode: code,
            },
            data: {
                telegramId: chatId,
            },
            select: {
                email: true,
            },
        });
    }

    static async getUserFromChatId(chatId: number) {
        return await prisma.user.findFirst({
            where: {
                telegramId: chatId,
            },
            select: {
                userId: true,
                email: true,
            },
        });
    }
}
