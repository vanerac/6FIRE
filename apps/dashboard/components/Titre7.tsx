import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldWhite14px } from '../styledMixins';

function Titre7() {
    return (
        <Titre>
            <Analytics>Lignes descriptives</Analytics>
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
    width: 138px;
    height: 22px;
    margin-left: 18.01%;
    margin-right: 16.59%;
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
    width: 138px;
    height: 22px;
    margin-left: 18.01%;
    margin-right: 16.59%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default Titre7;
