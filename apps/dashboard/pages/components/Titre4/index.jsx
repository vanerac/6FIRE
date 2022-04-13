import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldWhite10px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Titre4(props) {
    const { className } = props;

    return (
        <Titre className={`titre-14 ${className || ''}`}>
            <Analytics className="analytics-16">Editeur Article</Analytics>
        </Titre>
    );
}

const Titre = styled.div`
    display: flex;
    padding: 1.5px 20px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 116px;
    background-image: url(/img/rectangle-633-2@1x.png);
    background-size: cover;
    background-position: 50% 50%;

    &.titre-14.titre-15 {
        height: 28px;
    }
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldWhite10px}
    min-height: 17px;
    min-width: 74px;
    text-align: center;
    letter-spacing: 0.04px;
    line-height: 26px;
    white-space: nowrap;
`;

export default Titre4;
