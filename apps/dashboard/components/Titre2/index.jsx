import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldWhite14px } from '../../styledMixins';

function Titre2(props) {
    const { children } = props;

    return (
        <Titre>
            <Analytics>{children}</Analytics>
        </Titre>
    );
}

const Titre = styled.div`
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
    width: 52px;
    height: 22px;
    margin-left: 36.26%;
    margin-right: 35.16%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

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

const Analytics1 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 52px;
    height: 22px;
    margin-left: 36.26%;
    margin-right: 35.16%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default Titre2;
