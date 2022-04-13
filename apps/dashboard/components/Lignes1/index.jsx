import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalTundora12px } from '../../styledMixins';

function Lignes1() {
    return (
        <Lignes11>
            <Lignes12>Lignes 1</Lignes12>
            <Ligne6 src="/img/ligne-6-47@1x.png" />
        </Lignes11>
    );
}

const Lignes11 = styled.div`
    position: absolute;
    width: 305px;
    height: 22px;
    top: 66px;
    left: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Lignes12 = styled.div`
    ${PoppinsNormalTundora12px}
    width: 153px;
    height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    margin-left: 0.5px;
    flex: 1;
    max-height: 1px;
    margin-bottom: -0.5px;
    height: 1px;
    object-fit: cover;
`;

const Lignes = styled.div`
    position: absolute;
    width: 305px;
    height: 22px;
    top: 66px;
    left: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Lignes13 = styled.div`
    ${PoppinsNormalTundora12px}
    width: 153px;
    height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne61 = styled.img`
    margin-left: 0.5px;
    flex: 1;
    max-height: 1px;
    margin-bottom: -0.5px;
    height: 1px;
    object-fit: cover;
`;

export default Lignes1;
