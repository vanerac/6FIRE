import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PoppinsMediumMirage14px } from '../styledMixins';

function TradingCrypto(props: any): any {
    const { iconPencil, name, className } = props;

    return (
        <Link to="/trading-crypto">
            <TradingCrypto1 className={`trading-crypto ${className || ''}`}>
                <IconPencil className="icon-pencil" src={iconPencil} />
                <Name className="name-8">{name}</Name>
            </TradingCrypto1>
        </Link>
    );
}

const TradingCrypto1 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 22.5px;
    align-items: center;
    min-width: 230px;
    cursor: pointer;

    &.trading-crypto.bot-trading {
        padding: 11px 20.1px;
    }

    &.trading-crypto.crypto-wallet {
        padding: 11px 22px;
    }

    &.trading-crypto.broker {
        padding: 11px 21.3px;
    }

    &.trading-crypto.pays {
        padding: 11px 24.9px;
    }

    &.trading-crypto.bot-trading-1 {
        padding: 11px 20.1px;
    }

    &.trading-crypto.crypto-wallet-1 {
        padding: 11px 22px;
    }

    &.trading-crypto.broker-1 {
        padding: 11px 21.3px;
    }

    &.trading-crypto.pays-1 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.bot-trading-2 {
        padding: 11px 20.1px;
    }

    &.trading-crypto.crypto-wallet-2 {
        padding: 11px 22px;
    }

    &.trading-crypto.broker-2 {
        padding: 11px 21.3px;
    }

    &.trading-crypto.pays-2 {
        padding: 11px 24.9px;
    }

    &.trading-crypto.bot-trading-3 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-3 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-3 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-3 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-1 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-4 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-4 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-4 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-4 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-2 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-5 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-5 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-5 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-5 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-3 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-6 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-6 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-6 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-6 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-4 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-7 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-7 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-7 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-7 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.bot-trading-8 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-8 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-8 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-8 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-5 {
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-9 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-9 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-9 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-6 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-9 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.broker-10 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-10 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-7 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-10 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-10 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.pays-11 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-8 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-11 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-11 {
        padding: 11px 22px;
    }

    &.trading-crypto.pays-12 {
        padding: 11px 24.9px;
    }

    &.trading-crypto.trading-crypto-9 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-12 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-12 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-11 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-10 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-13 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-13 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-12 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-13 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-11 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-14 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-14 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-13 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-14 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-12 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-15 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-15 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-14 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-15 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.abonnement {
        position: absolute;
        top: 0;
        left: 0;
        padding: 11px 24.1px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-13 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-16 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-16 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-15 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-16 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-14 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-17 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-17 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-16 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-17 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-15 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-18 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-18 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-17 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-18 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-16 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-19 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-19 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-18 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-19 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-17 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-20 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-20 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-19 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-20 {
        padding: 11px 24.9px;
        cursor: unset;
    }

    &.trading-crypto.trading-crypto-18 {
        cursor: unset;
    }

    &.trading-crypto.bot-trading-21 {
        padding: 11px 20.1px;
        cursor: unset;
    }

    &.trading-crypto.crypto-wallet-21 {
        padding: 11px 22px;
        cursor: unset;
    }

    &.trading-crypto.broker-20 {
        padding: 11px 21.3px;
        cursor: unset;
    }

    &.trading-crypto.pays-21 {
        padding: 11px 24.9px;
        cursor: unset;
    }
`;

const IconPencil = styled.img`
    width: 19px;
    height: 19px;
    margin-top: 0;
    object-fit: cover;
`;

const Name = styled.div`
    ${PoppinsMediumMirage14px}
    min-height: 22px;
    align-self: flex-end;
    margin-left: 22px;
    min-width: 124px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const FontAwsomerobot = styled.img`
    .trading-crypto.bot-trading & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name1 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin = styled.img`
    .trading-crypto.crypto-wallet & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake = styled.img`
    .trading-crypto.broker & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope = styled.img`
    .trading-crypto.pays & {
        width: 18px;
        height: 18px;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot1 = styled.img`
    .trading-crypto.bot-trading-1 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-1  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin1 = styled.img`
    .trading-crypto.crypto-wallet-1 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name6 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-1  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake1 = styled.img`
    .trading-crypto.broker-1 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name7 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-1  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope1 = styled.img`
    .trading-crypto.pays-1 & {
        width: 18px;
        height: 18px;
    }
`;

const Name8 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-1  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot2 = styled.img`
    .trading-crypto.bot-trading-2 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name9 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-2  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin2 = styled.img`
    .trading-crypto.crypto-wallet-2 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name10 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-2  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake2 = styled.img`
    .trading-crypto.broker-2 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name11 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-2  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope2 = styled.img`
    .trading-crypto.pays-2 & {
        width: 18px;
        height: 18px;
    }
`;

const Name12 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-2  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot3 = styled.img`
    .trading-crypto.bot-trading-3 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name13 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-3  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin3 = styled.img`
    .trading-crypto.crypto-wallet-3 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name14 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-3  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake3 = styled.img`
    .trading-crypto.broker-3 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name15 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-3  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope3 = styled.img`
    .trading-crypto.pays-3 & {
        width: 18px;
        height: 18px;
    }
`;

const Name16 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-3  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot4 = styled.img`
    .trading-crypto.bot-trading-4 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name17 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-4  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin4 = styled.img`
    .trading-crypto.crypto-wallet-4 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name18 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-4  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake4 = styled.img`
    .trading-crypto.broker-4 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name19 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-4  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope4 = styled.img`
    .trading-crypto.pays-4 & {
        width: 18px;
        height: 18px;
    }
`;

const Name20 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-4  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot5 = styled.img`
    .trading-crypto.bot-trading-5 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name21 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-5  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin5 = styled.img`
    .trading-crypto.crypto-wallet-5 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name22 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-5  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake5 = styled.img`
    .trading-crypto.broker-5 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name23 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-5  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope5 = styled.img`
    .trading-crypto.pays-5 & {
        width: 18px;
        height: 18px;
    }
`;

const Name24 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-5  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot6 = styled.img`
    .trading-crypto.bot-trading-6 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name25 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-6  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin6 = styled.img`
    .trading-crypto.crypto-wallet-6 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name26 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-6  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake6 = styled.img`
    .trading-crypto.broker-6 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name27 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-6  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope6 = styled.img`
    .trading-crypto.pays-6 & {
        width: 18px;
        height: 18px;
    }
`;

const Name28 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-6  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot7 = styled.img`
    .trading-crypto.bot-trading-7 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name29 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-7  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin7 = styled.img`
    .trading-crypto.crypto-wallet-7 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name30 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-7  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake7 = styled.img`
    .trading-crypto.broker-7 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name31 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-7  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope7 = styled.img`
    .trading-crypto.pays-7 & {
        width: 18px;
        height: 18px;
    }
`;

const Name32 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-7  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot8 = styled.img`
    .trading-crypto.bot-trading-8 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name33 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-8  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin8 = styled.img`
    .trading-crypto.crypto-wallet-8 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name34 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-8  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake8 = styled.img`
    .trading-crypto.broker-8 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name35 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-8  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope8 = styled.img`
    .trading-crypto.pays-8 & {
        width: 18px;
        height: 18px;
    }
`;

const Name36 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-8  & {
        min-width: 36px;
    }
`;

const FontAwsomebitcoin9 = styled.img`
    .trading-crypto.crypto-wallet-9 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name37 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-9  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake9 = styled.img`
    .trading-crypto.broker-9 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name38 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-9  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope9 = styled.img`
    .trading-crypto.pays-9 & {
        width: 18px;
        height: 18px;
    }
`;

const Name39 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-9  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot9 = styled.img`
    .trading-crypto.bot-trading-9 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name40 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-9  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomehandshake10 = styled.img`
    .trading-crypto.broker-10 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name41 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-10  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope10 = styled.img`
    .trading-crypto.pays-10 & {
        width: 18px;
        height: 18px;
    }
`;

const Name42 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-10  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot10 = styled.img`
    .trading-crypto.bot-trading-10 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name43 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-10  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin10 = styled.img`
    .trading-crypto.crypto-wallet-10 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name44 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-10  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomeglobeEurope11 = styled.img`
    .trading-crypto.pays-11 & {
        width: 18px;
        height: 18px;
    }
`;

const Name45 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-11  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot11 = styled.img`
    .trading-crypto.bot-trading-11 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name46 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-11  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin11 = styled.img`
    .trading-crypto.crypto-wallet-11 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name47 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-11  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomeglobeEurope12 = styled.img`
    .trading-crypto.pays-12 & {
        width: 18px;
        height: 18px;
    }
`;

const Name48 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-12  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot12 = styled.img`
    .trading-crypto.bot-trading-12 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name49 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-12  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin12 = styled.img`
    .trading-crypto.crypto-wallet-12 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name50 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-12  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake11 = styled.img`
    .trading-crypto.broker-11 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name51 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-11  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomerobot13 = styled.img`
    .trading-crypto.bot-trading-13 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name52 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-13  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin13 = styled.img`
    .trading-crypto.crypto-wallet-13 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name53 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-13  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake12 = styled.img`
    .trading-crypto.broker-12 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name54 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-12  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope13 = styled.img`
    .trading-crypto.pays-13 & {
        width: 18px;
        height: 18px;
    }
`;

const Name55 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-13  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot14 = styled.img`
    .trading-crypto.bot-trading-14 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name56 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-14  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin14 = styled.img`
    .trading-crypto.crypto-wallet-14 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name57 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-14  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake13 = styled.img`
    .trading-crypto.broker-13 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name58 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-13  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope14 = styled.img`
    .trading-crypto.pays-14 & {
        width: 18px;
        height: 18px;
    }
`;

const Name59 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-14  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot15 = styled.img`
    .trading-crypto.bot-trading-15 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name60 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-15  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin15 = styled.img`
    .trading-crypto.crypto-wallet-15 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name61 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-15  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake14 = styled.img`
    .trading-crypto.broker-14 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name62 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-14  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope15 = styled.img`
    .trading-crypto.pays-15 & {
        width: 18px;
        height: 18px;
    }
`;

const Name63 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-15  & {
        min-width: 36px;
    }
`;

const IconMaterialPayment = styled.img`
    .trading-crypto.abonnement & {
        height: 15px;
    }
`;

const Name64 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.abonnement  & {
        margin-left: 21px;
        min-width: 95px;
    }
`;

const FontAwsomerobot16 = styled.img`
    .trading-crypto.bot-trading-16 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name65 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-16  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin16 = styled.img`
    .trading-crypto.crypto-wallet-16 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name66 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-16  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake15 = styled.img`
    .trading-crypto.broker-15 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name67 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-15  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope16 = styled.img`
    .trading-crypto.pays-16 & {
        width: 18px;
        height: 18px;
    }
`;

const Name68 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-16  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot17 = styled.img`
    .trading-crypto.bot-trading-17 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name69 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-17  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin17 = styled.img`
    .trading-crypto.crypto-wallet-17 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name70 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-17  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake16 = styled.img`
    .trading-crypto.broker-16 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name71 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-16  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope17 = styled.img`
    .trading-crypto.pays-17 & {
        width: 18px;
        height: 18px;
    }
`;

const Name72 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-17  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot18 = styled.img`
    .trading-crypto.bot-trading-18 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name73 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-18  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin18 = styled.img`
    .trading-crypto.crypto-wallet-18 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name74 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-18  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake17 = styled.img`
    .trading-crypto.broker-17 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name75 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-17  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope18 = styled.img`
    .trading-crypto.pays-18 & {
        width: 18px;
        height: 18px;
    }
`;

const Name76 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-18  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot19 = styled.img`
    .trading-crypto.bot-trading-19 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name77 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-19  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin19 = styled.img`
    .trading-crypto.crypto-wallet-19 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name78 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-19  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake18 = styled.img`
    .trading-crypto.broker-18 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name79 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-18  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope19 = styled.img`
    .trading-crypto.pays-19 & {
        width: 18px;
        height: 18px;
    }
`;

const Name80 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-19  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot20 = styled.img`
    .trading-crypto.bot-trading-20 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name81 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-20  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin20 = styled.img`
    .trading-crypto.crypto-wallet-20 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name82 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-20  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake19 = styled.img`
    .trading-crypto.broker-19 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name83 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-19  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope20 = styled.img`
    .trading-crypto.pays-20 & {
        width: 18px;
        height: 18px;
    }
`;

const Name84 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-20  & {
        min-width: 36px;
    }
`;

const FontAwsomerobot21 = styled.img`
    .trading-crypto.bot-trading-21 & {
        width: 21px;
        height: 17px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name85 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.bot-trading-21  & {
        margin-left: 23px;
        min-width: 84px;
    }
`;

const FontAwsomebitcoin21 = styled.img`
    .trading-crypto.crypto-wallet-21 & {
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name86 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.crypto-wallet-21  & {
        margin-left: 23px;
        min-width: 100px;
    }
`;

const FontAwsomehandshake20 = styled.img`
    .trading-crypto.broker-20 & {
        width: 21px;
        height: 13px;
        margin-bottom: 0;
        margin-top: unset;
    }
`;

const Name87 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.broker-20  & {
        margin-left: 21px;
        min-width: 47px;
    }
`;

const FontAwsomeglobeEurope21 = styled.img`
    .trading-crypto.pays-21 & {
        width: 18px;
        height: 18px;
    }
`;

const Name88 = styled.div`
    ${PoppinsMediumMirage14px}

    .trading-crypto.pays-21  & {
        min-width: 36px;
    }
`;

export default TradingCrypto;
