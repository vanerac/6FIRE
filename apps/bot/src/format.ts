import { Position } from './cache';

export function openedPositionMessage(traderName: string, openPosition: Position[]): string[] {
    return openPosition.map((position) => {
        if (position.amount > 0) {
            return [`NOUVELLE ORDRE DE ${traderName}`, '🟢 J\'ACHETÈ ', 'Prix d\'entrée :' + position.entryPrice].join(
                '\n',
            );
        } else {
            return [`NOUVELLE ORDRE DE ${traderName}`, '🛑 JE VENDS ', 'Prix d\'entrée :' + position.entryPrice].join(
                '\n',
            );
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
                    '📈 J’AUGMENTE LA POSITION :',
                    `J'augmente de +${newPosition.amount - oldPosition.amount}`,
                    "Prix d'entrée :" + newPosition.entryPrice,
                    'Prix d\'entrée de la position globale :' + oldPosition.entryPrice,
                ].join('\n');
            } else if (newPosition.amount < oldPosition.amount) {
                return [
                    `NOUVELLE ORDRE DE ${traderName}`,
                    '📉 JE RÉDUIS LA POSITION :',
                    `Je réduis ma position de ${oldPosition.amount - newPosition.amount}`,
                    'Prix de clôture :' + newPosition.markPrice,
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
            '✖️ JE CLOTURE POSITION ',
            'Prix de clôture :' + position.markPrice,
            'Profit :' + profit + '%',
        ].join('\n');
    });
}
