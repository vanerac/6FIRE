import { Position } from '@shared/scraper/types';

export interface ScrapeDifferential {
    opened: Position[];
    closed: Position[];
}

// Caclulate the value between the 2 scrapes
export function calculateCloseValue(open: Position, close: Position) {
    const openValue = open.entryPrice * open.amount;
    const closeValue = close.entryPrice * close.amount;
    return closeValue - openValue;
}

export function calculateClosePercentage(open: Position, close: Position) {
    const openValue = open.entryPrice * open.amount;
    const closeValue = close.entryPrice * close.amount;
    return (closeValue - openValue) / openValue;
}

export function scrapeDifferential(current: Position[], previous: Position[]): ScrapeDifferential {
    const opened: Position[] = [];
    const closed: Position[] = [];

    // Find the opened positions
    current.forEach((position) => {
        const previousPosition = previous.find((p) => p.symbol === position.symbol);
        if (!previousPosition) {
            opened.push(position);
        }
    });

    // Find the closed positions
    previous.forEach((position) => {
        const currentPosition = current.find((p) => p.symbol === position.symbol);
        if (!currentPosition) {
            closed.push(position);
        }
    });

    return { opened, closed };
}
