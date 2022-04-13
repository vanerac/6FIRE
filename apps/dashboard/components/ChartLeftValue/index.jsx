import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function ChartLeftValue(props) {
    const { children, className } = props;

    return (
        <ChartLeftValue1 className={`chart-left-value ${className || ''}`}>
            <X1k className="x1k">{children}</X1k>
            <Shape className="shape-2"></Shape>
        </ChartLeftValue1>
    );
}

const ChartLeftValue1 = styled.div`
    height: 17px;
    display: flex;
    align-items: flex-end;
    min-width: 777px;

    &.chart-left-value.chart-left-value-1 {
        margin-top: 22px;
    }

    &.chart-left-value.chart-left-value-2 {
        margin-top: 23px;
        margin-left: 3px;
        min-width: 774px;
    }

    &.chart-left-value.chart-left-value-3 {
        margin-top: 22px;
        margin-left: 3px;
        min-width: 774px;
    }

    &.chart-left-value.chart-left-value-4 {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 774px;
    }

    &.chart-left-value.chart-left-value-5 {
        position: absolute;
        top: 40px;
        left: 1px;
        min-width: 773px;
    }

    &.chart-left-value.chart-left-value-6 {
        position: absolute;
        top: 79px;
        left: 15px;
        min-width: 759px;
    }
`;

const X1k = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-bottom: -0.5px;
    min-width: 28px;
    text-align: right;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Shape = styled.div`
    width: 720px;
    height: 1px;
    margin-left: 29px;
    margin-bottom: 0.66px;
    background-color: var(--seashell);
`;

const X1k1 = styled.div`
    ${PoppinsNormalShadowBlue12px}

    .chart-left-value.chart-left-value-2  & {
        min-width: 25px;
    }
`;

const X1k2 = styled.div`
    ${PoppinsNormalShadowBlue12px}

    .chart-left-value.chart-left-value-3  & {
        min-width: 25px;
    }
`;

const X1k3 = styled.div`
    ${PoppinsNormalShadowBlue12px}

    .chart-left-value.chart-left-value-4  & {
        min-width: 25px;
    }
`;

const X1k4 = styled.div`
    ${PoppinsNormalShadowBlue12px}

    .chart-left-value.chart-left-value-5  & {
        min-width: 24px;
    }
`;

const X1k5 = styled.div`
    ${PoppinsNormalShadowBlue12px}

    .chart-left-value.chart-left-value-6  & {
        min-width: 10px;
    }
`;

export default ChartLeftValue;
