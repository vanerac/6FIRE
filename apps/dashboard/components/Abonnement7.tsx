import React from 'react';
import Link from 'next/link';
import EssaiGratuit from './EssaiGratuit';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function Abonnement7(props) {
    const {
        overlapGroup,
        iconMaterialPayment,
        name1,
        iconIonicIosArrowDown,
        name2,
        name3,
        essaiGratuit,
        name4,
        essaiGratuitProps,
    } = props;

    return (
        <Abonnement>
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Line></Line>
                <IconMaterialPayment src={iconMaterialPayment} />
                <Name>{name1}</Name>
                <IconIonicIosArrowDown src={iconIonicIosArrowDown} />
            </OverlapGroup>
            <Link href="/abonnement-gestion-abonnements">
                <GestionAbonnements>
                    <Name1>{name2}</Name1>
                </GestionAbonnements>
            </Link>
            <Link href="/abonnement-code-promo">
                <GestionAbonnements>
                    <Name2>{name3}</Name2>
                </GestionAbonnements>
            </Link>
            <Link href="/abonnement-essai-gratuit">
                <EssaiGratuit1 style={{ backgroundImage: `url(${essaiGratuit})` }}>
                    <Name3>{name4}</Name3>
                </EssaiGratuit1>
            </Link>
            <EssaiGratuit name={essaiGratuitProps.name} className={essaiGratuitProps.className} />
        </Abonnement>
    );
}

const Abonnement = styled.div`
    width: 230px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 260px;
`;

const OverlapGroup = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Line = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const IconMaterialPayment = styled.img`
    width: 19px;
    height: 15px;
    margin-left: 20px;
    margin-top: 0;
    object-fit: cover;
`;

const Name = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    margin-left: 21px;
    margin-top: 8px;
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

const GestionAbonnements = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-color: var(--blue-ribbon-2);
    cursor: pointer;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 161px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 92px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const EssaiGratuit1 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-size: cover;
    background-position: 50% 50%;
    cursor: pointer;
`;

const Name3 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 90px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

export default Abonnement7;
