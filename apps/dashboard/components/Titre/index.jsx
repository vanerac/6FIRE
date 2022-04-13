import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldWhite14px } from '../../styledMixins';

function Titre(props) {
    const { children, className } = props;

    return (
        <Titre1 className={`titre-4 ${className || ''}`}>
            <Analytics className="analytics-6">{children}</Analytics>
        </Titre1>
    );
}

const Titre1 = styled.div`
    position: absolute;
    width: 182px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 96px;
    height: 22px;
    margin-left: 24.18%;
    margin-right: 23.08%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Analytics1 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}

    .titre-4.titre-5  & {
        width: 94px;
        margin-left: 24.73%;
        margin-right: 23.63%;
    }
`;

const Analytics2 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}

    .titre-4.titre-6  & {
        width: 94px;
        margin-left: 24.73%;
        margin-right: 23.63%;
    }
`;

const Analytics3 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}

    .titre-4.titre-7  & {
        width: 94px;
        margin-left: 24.73%;
        margin-right: 23.63%;
    }
`;

const Analytics4 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}

    .titre-4.titre-8  & {
        width: 94px;
        margin-left: 24.73%;
        margin-right: 23.63%;
    }
`;

export default Titre;
