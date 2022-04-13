import React from 'react';
import { Link } from 'react-router-dom';
import GestionAbonnements from '../GestionAbonnements';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Abonnement4(props) {
    const {
        overlapGroup,
        iconMaterialPayment,
        name1,
        iconIonicIosArrowDown,
        essaiGratuit,
        name2,
        codeGratuit,
        name3,
        gestionAbonnements1Props,
        gestionAbonnements2Props,
    } = props;

    return (
        <Abonnement>
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Line></Line>
                <IconMaterialPayment src={iconMaterialPayment} />
                <Name>{name1}</Name>
                <IconIonicIosArrowDown src={iconIonicIosArrowDown} />
            </OverlapGroup>
            <GestionAbonnements>{gestionAbonnements1Props.children}</GestionAbonnements>
            <GestionAbonnements className={gestionAbonnements2Props.className}>
                {gestionAbonnements2Props.children}
            </GestionAbonnements>
            <Link to="/abonnement-essai-gratuit">
                <EssaiGratuit style={{ backgroundImage: `url(${essaiGratuit})` }}>
                    <Name1>{name2}</Name1>
                </EssaiGratuit>
            </Link>
            <Link to="/abonnement-code-gratuit">
                <EssaiGratuit style={{ backgroundImage: `url(${codeGratuit})` }}>
                    <Name2>{name3}</Name2>
                </EssaiGratuit>
            </Link>
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

const EssaiGratuit = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-size: cover;
    background-position: 50% 50%;
    cursor: pointer;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 90px;
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

export default Abonnement4;
