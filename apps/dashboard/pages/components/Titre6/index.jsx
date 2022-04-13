import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldWhite14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Titre6() {
    return (
        <Titre>
            <Analytics>Plateforme de paiement</Analytics>
        </Titre>
    );
}

const Titre = styled.div`
    position: absolute;
    width: 211px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 176px;
    height: 22px;
    margin-left: 9%;
    margin-right: 7.58%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Titre1 = styled.div`
    position: absolute;
    width: 211px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics1 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 176px;
    height: 22px;
    margin-left: 9%;
    margin-right: 7.58%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default Titre6;
