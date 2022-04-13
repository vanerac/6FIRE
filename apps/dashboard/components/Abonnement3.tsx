import React from 'react';
import GestionAbonnements from './GestionAbonnements';
import EssaiGratuit from './EssaiGratuit';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function Abonnement3(props) {
    const {
        overlapGroup,
        iconMaterialPayment,
        name,
        gestionAbonnements1Props,
        gestionAbonnements2Props,
        essaiGratuit1Props,
        essaiGratuit2Props,
    } = props;

    return (
        <Abonnement>
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Line></Line>
                <IconMaterialPayment src={iconMaterialPayment} />
                <Name>{name}</Name>
            </OverlapGroup>
            <GestionAbonnements className={gestionAbonnements1Props.className}>
                {gestionAbonnements1Props.children}
            </GestionAbonnements>
            <GestionAbonnements className={gestionAbonnements2Props.className}>
                {gestionAbonnements2Props.children}
            </GestionAbonnements>
            <EssaiGratuit name={essaiGratuit1Props.name} />
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

export default Abonnement3;
