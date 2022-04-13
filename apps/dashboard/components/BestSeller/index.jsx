import React from 'react';
import styled from 'styled-components';
import { Border2pxTundora, PoppinsNormalTundora12px } from '../../styledMixins';

function BestSeller(props) {
    const { children, className } = props;

    return (
        <BestSeller1 className={`best-seller ${className || ''}`}>
            <Rectangle634 className="rectangle-634"></Rectangle634>
            <Surname className="surname">{children}</Surname>
        </BestSeller1>
    );
}

const BestSeller1 = styled.div`
    position: absolute;
    width: 129px;
    height: 17px;
    top: 122px;
    left: 39px;
    display: flex;
    justify-content: space-between;

    &.best-seller.visible {
        left: 206px;
    }

    &.best-seller.visible-1 {
        left: 206px;
    }

    &.best-seller.renouvellement-5 {
        top: 147px;
        left: 357px;
    }

    &.best-seller.visible-2 {
        top: 172px;
    }
`;

const Rectangle634 = styled.div`
    ${Border2pxTundora}
    margin-top: 0.2px;
    width: 17px;
    border-radius: 2px;
`;

const Surname = styled.div`
    ${PoppinsNormalTundora12px}
    width: 101px;
    height: 19px;
    margin-right: -2px;
    letter-spacing: 0;
    line-height: 12px;
`;

export default BestSeller;
