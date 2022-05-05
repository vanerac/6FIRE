import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function verifySubscription(userId: string) {
    const userSubscription = await prisma.userSubscription.findFirst({
        where: {
            userId: +userId,
            status: 'active',
            endDate: {
                gt: new Date(),
            },
        },
        orderBy: {
            createdAt: 'desc',
            Subscription: {
                level: 'desc',
            },
        },
    });

    if (!userSubscription) {
        return false;
    }

    const subscription = await prisma.subscription.findFirst({
        where: {
            id: userSubscription.subscriptionId,
        },
    });

    if (!subscription) {
        return false;
    }

    const user = await prisma.user.findFirst({
        where: {
            id: +userId,
        },
    });

    if (!user) {
        return false;
    }

    const now = new Date();
    const subscriptionUpdateDate = new Date(userSubscription.updatedAt);
    const subscriptionRefreshRate = subscription.refreshRate * 24 * 60 * 60 * 1000;
    const subscriptionEndDate = new Date(subscriptionUpdateDate.getTime() + subscriptionRefreshRate);

    if (subscriptionEndDate < now) {
        return false;
    }

    return true;
}

export async function verifySubscriptionLevel(userId: string, level: number) {
    // Verifies if the user can access the requested level

    const userSubscription = await prisma.userSubscription.findFirst({
        where: {
            userId: +userId,
            status: 'active',
            endDate: {
                gt: new Date(),
            },
        },
    });

    if (!userSubscription) {
        return false;
    }

    const subscription = await prisma.subscription.findFirst({
        where: {
            id: userSubscription.subscriptionId,
        },
    });

    if (!subscription) {
        return false;
    }

    return subscription.level === level;
}

export async function getSubscriptionLevel(userId: number): Promise<number> {
    const userSubscription = await prisma.userSubscription.findFirst({
        where: {
            userId: +userId,
            status: 'active',
            endDate: {
                gt: new Date(),
            },
        },
        select: {
            Subscription: true,
        },
    });

    if (!userSubscription) {
        return -1;
    }

    return userSubscription.Subscription.level;
}
