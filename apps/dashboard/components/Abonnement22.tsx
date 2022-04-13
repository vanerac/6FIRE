import React from 'react';
import GestionAbonnements from './GestionAbonnements';
import EssaiGratuit from './EssaiGratuit';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function Abonnement22(props) {
    const { overlapGroup, gestionAbonnements1Props, gestionAbonnements2Props, essaiGratuit1Props, essaiGratuit2Props } =
        props;

    return (
        <Abonnement>
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Line></Line>
                <IconMaterialPayment src="/img/icon-material-payment-15@1x.png" />
                <Name>Abonnement</Name>
                <IconIonicIosArrowDown src="/img/icon-ionic-ios-arrow-down-10@1x.png" />
            </OverlapGroup>
            <GestionAbonnements>{gestionAbonnements1Props.children}</GestionAbonnements>
            <GestionAbonnements className={gestionAbonnements2Props.className}>
                {gestionAbonnements2Props.children}
            </GestionAbonnements>
            <EssaiGratuit name={essaiGratuit1Props.name} className={essaiGratuit1Props.className} />
            <EssaiGratuit name={essaiGratuit2Props.name} className={essaiGratuit2Props.className} />
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

const Abonnement1 = styled.div`
    width: 230px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 260px;
`;

const OverlapGroup1 = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Line1 = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const IconMaterialPayment1 = styled.img`
    width: 19px;
    height: 15px;
    margin-left: 20px;
    margin-top: 0;
    object-fit: cover;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    margin-left: 21px;
    margin-top: 8px;
    min-width: 95px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const IconIonicIosArrowDown1 = styled.img`
    width: 12px;
    height: 7px;
    margin-left: 37px;
    margin-top: 0;
    object-fit: cover;
`;

const Abonnement2 = styled.div`
    width: 230px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 260px;
`;

const OverlapGroup2 = styled.div`
    display: flex;
    align-items: center;
    min-width: 230px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Line2 = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const IconMaterialPayment2 = styled.img`
    width: 19px;
    height: 15px;
    margin-left: 20px;
    margin-top: 0;
    object-fit: cover;
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    margin-left: 21px;
    margin-top: 8px;
    min-width: 95px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const IconIonicIosArrowDown2 = styled.img`
    width: 12px;
    height: 7px;
    margin-left: 37px;
    margin-top: 0;
    object-fit: cover;
`;

export default Abonnement22;
