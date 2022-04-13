import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function TradingCrypto2(props: any): any {
    const { fontawsomePen, name, className } = props;

    return (
        <TradingCrypto className={`trading-crypto-19 ${className || ''}`}>
            <Line className="line-1"></Line>
            <IconPencil className="icon-pencil-1" src={fontawsomePen} />
            <Name className="name-34">{name}</Name>
        </TradingCrypto>
    );
}

const TradingCrypto = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    background-image: url(/img/frame-12@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Line = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const IconPencil = styled.img`
    width: 19px;
    height: 19px;
    margin-left: 18px;
    margin-top: 0;
    object-fit: cover;
`;

const Name = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    margin-left: 22px;
    margin-top: 8px;
    min-width: 124px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const FontAwsomerobot = styled.img`
    .trading-crypto-19.bot-trading-22 & {
        width: 21px;
        height: 17px;
        margin-left: 16px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .trading-crypto-19.bot-trading-22  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin = styled.img`
    .trading-crypto-19.crypto-wallet-22 & {
        width: 18px;
        height: 18px;
        margin-left: 19px;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .trading-crypto-19.crypto-wallet-22  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake = styled.img`
    .trading-crypto-19.broker-21 & {
        width: 21px;
        height: 13px;
        margin-left: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .trading-crypto-19.broker-21  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomehandshake1 = styled.img`
    .trading-crypto-19.broker-22 & {
        width: 21px;
        height: 13px;
        margin-left: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .trading-crypto-19.broker-22  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope = styled.img`
    .trading-crypto-19.pays-22 & {
        width: 18px;
        height: 18px;
        margin-left: 21px;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .trading-crypto-19.pays-22  & {
        min-width: 36px;
    }
`;

export default TradingCrypto2;
