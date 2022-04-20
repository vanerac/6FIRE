export interface Position {
    symbol: string; //'STORJUSDT';
    entryPrice: number; //1.303275;
    markPrice: number; //1.26076783;
    pnl: number; // -40.12676848;
    roe: number; //-1.34861214;
    amount: number; //944;
    updateTimeStamp: number; //1634571653046;
}

export interface Trader {
    id: string; //"70269580C70D9F62BFDEE81E8080E0F9",
    name: string; // 'AroJarHzEe';
    positionShared: boolean; // true;s
    deliveryPositionShared: boolean; // false;
    pnl: number; //409.017814;
    roi: number; //1.00638248;
    rank: number; //201;
    positions: Position[];
}
