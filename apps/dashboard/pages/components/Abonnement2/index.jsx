import React from 'react';
import { Link } from 'react-router-dom';
import GestionAbonnements from '../GestionAbonnements';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Abonnement2(props) {
    const {
        overlapGroup,
        iconMaterialPayment,
        name1,
        iconIonicIosArrowDown,
        name2,
        essaiGratuit,
        name3,
        codeGratuit,
        name4,
        gestionAbonnementsProps,
    } = props;

    return (
        <Abonnement>
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                <Line></Line>
                <IconMaterialPayment src={iconMaterialPayment} />
                <Name>{name1}</Name>
                <IconIonicIosArrowDown src={iconIonicIosArrowDown} />
            </OverlapGroup>
            <GestionAbonnements>{gestionAbonnementsProps.children}</GestionAbonnements>
            <Link to="/abonnement-code-promo">
                <CodePromo>
                    <Name1>{name2}</Name1>
                </CodePromo>
            </Link>
            <Link to="/abonnement-essai-gratuit">
                <EssaiGratuit style={{ backgroundImage: `url(${essaiGratuit})` }}>
                    <Name2>{name3}</Name2>
                </EssaiGratuit>
            </Link>
            <Link to="/abonnement-code-gratuit">
                <EssaiGratuit style={{ backgroundImage: `url(${codeGratuit})` }}>
                    <Name1>{name4}</Name1>
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

const CodePromo = styled.div`
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
    min-width: 92px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
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

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 90px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

export default Abonnement2;
