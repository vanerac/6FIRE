import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldTundora10px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Titre5(props) {
    const { className } = props;

    return (
        <Titre className={`titre-16 ${className || ''}`}>
            <Analytics className="analytics-17">HTML</Analytics>
        </Titre>
    );
}

const Titre = styled.div`
    display: flex;
    padding: 1.5px 43px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 116px;
    background-image: url(/img/rectangle-633-1@1x.png);
    background-size: cover;
    background-position: 50% 50%;

    &.titre-16.titre-17 {
        height: 28px;
    }
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldTundora10px}
    min-height: 17px;
    min-width: 28px;
    text-align: center;
    letter-spacing: 0.04px;
    line-height: 26px;
    white-space: nowrap;
`;

export default Titre5;
