/* eslint-disable */
import {Position} from './cache';

export function openedPositionMessage(traderName: string, openPosition: Position[]): string[] {
    return openPosition.map((position) => {

        if (position.amount > 0) {
            return [
                `NOUVELLE ORDRE DE ${traderName}`,
                '🟢 J\'ACHETÈ ' + position.symbol,
                'Prix d\'entrée : ' + formatNumber(position.entryPrice),
            ].join('\n');
        } else {
            return [
                `NOUVELLE ORDRE DE ${traderName}`,
                '🛑 JE VENDS ' + position.symbol,
                'Prix d\'entrée : ' + formatNumber(position.entryPrice),
            ].join('\n');
        }
    });
}

export function amountChangeMessage(traderName: string, oldPositions: Position[], newPositions: Position[]): string[] {
    return newPositions.map((newPosition) => {
        const oldPosition = oldPositions.find((oldPosition) => oldPosition.symbol === newPosition.symbol);
        if (oldPosition) {
            if (newPosition.amount > oldPosition.amount) {
                return [
                    `NOUVELLE ORDRE DE ${traderName}`,
                    '📈 J’AUGMENTE LA POSITION : ' + oldPosition.symbol,
                    `J'augmente de +${formatNumber(newPosition.amount - oldPosition.amount)}`,
                    "Prix d'entrée : " + formatNumber(newPosition.entryPrice),
                    'Prix d\'entrée de la position globale : ' + formatNumber(oldPosition.entryPrice),
                ].join('\n');
            } else if (newPosition.amount < oldPosition.amount) {
                return [
                    `NOUVELLE ORDRE DE ${traderName}`,
                    '📉 JE RÉDUIS LA POSITION : ' + newPosition.symbol,
                    `Je réduis ma position de ${formatNumber(oldPosition.amount - newPosition.amount)}`,
                    'Prix de clôture : ' + formatNumber(newPosition.markPrice),
                ].join('\n');
            }
        }
    });
}

export function closedPositionMessage(traderName: string, positions: Position[]): string[] {
    return positions.map((position) => {
        const profit = ((position.markPrice - position.entryPrice) / position.entryPrice) * 100;
        return [
            `NOUVELLE ORDRE DE ${traderName}`,
            '✖️ JE CLOTURE POSITION ' + position.symbol,
            'Prix de clôture : ' + formatNumber(position.markPrice),
            'Profit : ' + formatNumber(profit) + '%',
        ].join('\n');
    });
}

export function formatNumber(number: number): string {
    if (number < 10) {
        return number.toFixed(4);
    } else {
        return number.toFixed(2);
    }
}
