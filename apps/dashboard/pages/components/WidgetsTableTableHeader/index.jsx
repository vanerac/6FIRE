import React from 'react';
import styled from 'styled-components';
import { PoppinsSemiBoldVulcan12px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function WidgetsTableTableHeader(props) {
    const { paymentNumber, dateTime1, dateTime2, amount1, amount2 } = props;

    return (
        <WidgetsTableTableHeader1>
            <PaymentNumber>{paymentNumber}</PaymentNumber>
            <DateTime>{dateTime1}</DateTime>
            <DateTime1>{dateTime2}</DateTime1>
            <Amount>{amount1}</Amount>
            <Amount1>{amount2}</Amount1>
        </WidgetsTableTableHeader1>
    );
}

const WidgetsTableTableHeader1 = styled.div`
    ${PoppinsSemiBoldVulcan12px}
    height: 48px;
    display: flex;
    padding: 10.5px 46px;
    align-items: flex-end;
    min-width: 1210px;
    background-color: var(--whisper);
`;

const PaymentNumber = styled.div`
    min-height: 19px;
    min-width: 71px;
    letter-spacing: 0.87px;
    line-height: 12px;
    white-space: nowrap;
`;

const DateTime = styled.div`
    min-height: 19px;
    margin-left: 225px;
    min-width: 65px;
    letter-spacing: 0.87px;
    line-height: 12px;
    white-space: nowrap;
`;

const DateTime1 = styled.div`
    min-height: 19px;
    margin-left: 196px;
    min-width: 93px;
    letter-spacing: 0.87px;
    line-height: 12px;
    white-space: nowrap;
`;

const Amount = styled.div`
    min-height: 19px;
    margin-left: 147px;
    min-width: 56px;
    letter-spacing: 0.87px;
    line-height: 12px;
    white-space: nowrap;
`;

const Amount1 = styled.div`
    min-height: 19px;
    margin-left: 164px;
    min-width: 41px;
    letter-spacing: 0.87px;
    line-height: 12px;
    white-space: nowrap;
`;

export default WidgetsTableTableHeader;
