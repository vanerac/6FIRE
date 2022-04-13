import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PoppinsMediumMirage14px } from '../../styledMixins';

function Abonnement(props) {
    const { className } = props;

    return (
        <Link href="/abonnement-gestion-abonnements">
            <Abonnement1 className={`abonnement-1 ${className || ''}`}>
                <IconMaterialPayment className="icon-material-payment" src="/img/icon-material-payment-10@1x.png" />
                <Name className="name-9">Abonnement</Name>
                <IconIonicIosArrowDown
                    className="icon-ionic-ios-arrow-down-1"
                    src="/img/icon-ionic-ios-arrow-down-10@1x.png"
                />
            </Abonnement1>
        </Link>
    );
}

const Abonnement1 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 22.4px;
    justify-content: flex-end;
    align-items: center;
    min-width: 230px;
    cursor: pointer;

    &.abonnement-1.abonnement-3 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-4 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-5 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-6 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-7 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-8 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-9 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-10 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-11 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-12 {
        cursor: unset;
    }

    &.abonnement-1.abonnement-13 {
        cursor: unset;
    }
`;

const IconMaterialPayment = styled.img`
    width: 19px;
    height: 15px;
    margin-top: 0;
    object-fit: cover;
`;

const Name = styled.div`
    ${PoppinsMediumMirage14px}
    min-height: 22px;
    align-self: flex-end;
    margin-left: 21px;
    min-width: 95px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const IconIonicIosArrowDown = styled.img`
    width: 12px;
    height: 7px;
    margin-left: 37px;
    margin-top: 0;
    object-fit: cover;
`;

export default Abonnement;
