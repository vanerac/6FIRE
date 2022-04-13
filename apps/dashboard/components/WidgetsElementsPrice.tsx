import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px, PoppinsSemiBoldShamrock16px } from '../styledMixins';

function WidgetsElementsPrice(props) {
    const { className } = props;

    return (
        <WidgetsElementsPrice1 className={`widgets-_-elements-price ${className || ''}`}>
            <Price className="price">
                <X25 className="x25">2.3%</X25>
                <IcArrowNarrowUp className="ic-arrow-narrow-up" src="/img/ic-arrow-narrow-up-1@1x.png" />
            </Price>
            <ComparedTo21340 className="compared-to-21340">than last year</ComparedTo21340>
        </WidgetsElementsPrice1>
    );
}

const WidgetsElementsPrice1 = styled.div`
    position: absolute;
    width: 147px;
    height: 23px;
    top: 38px;
    left: 0;
    display: flex;
    justify-content: space-between;

    &.widgets-_-elements-price.widgets-_-elements-price-1 {
        margin-top: 4px;
        position: unset;
        top: unset;
        left: unset;
    }
`;

const Price = styled.div`
    width: 56px;
    display: flex;
    justify-content: space-between;
`;

const X25 = styled.div`
    ${PoppinsSemiBoldShamrock16px}
    margin-top: 3.5px;
    margin-bottom: -5.5px;
    width: 38px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const IcArrowNarrowUp = styled.img`
    margin-top: 3.1px;
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

const ComparedTo21340 = styled.div`
    ${PoppinsNormalShadowBlue12px}
    margin-top: 1.5px;
    margin-bottom: 2.5px;
    width: 85px;
    margin-right: -2px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default WidgetsElementsPrice;
