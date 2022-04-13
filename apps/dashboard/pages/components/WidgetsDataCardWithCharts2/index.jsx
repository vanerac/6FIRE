import React from 'react';
import WidgetsElementsChartMiniChart from '../WidgetsElementsChartMiniChart';
import styled from 'styled-components';
import {
    PoppinsSemiBoldVulcan28px,
    PoppinsNormalShadowBlue16px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function WidgetsDataCardWithCharts2(props) {
    const { sales, x27632, className, widgetsElementsChartMiniChartProps } = props;

    return (
        <WidgetsDataCardWithCharts className={`widgets-data-card-with-charts-1 ${className || ''}`}>
            <Data className="data-12">
                <Sales className="sales-16">{sales}</Sales>
                <X27632 className="x27632-6">{x27632}</X27632>
            </Data>
            <WidgetsElementsChartMiniChart
                chart={widgetsElementsChartMiniChartProps.chart}
                path4Copy8={widgetsElementsChartMiniChartProps.path4Copy8}
                className={widgetsElementsChartMiniChartProps.className}
            />
        </WidgetsDataCardWithCharts>
    );
}

const WidgetsDataCardWithCharts = styled.div`
    width: 410px;
    height: 133px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 1px 4px #15223214;

    &.widgets-data-card-with-charts-1.widgets-data-card-with-charts-2 {
        margin-left: 20px;
    }

    &.widgets-data-card-with-charts-1.widgets-data-card-with-charts-3 {
        height: 134px;
        margin-left: 20px;
    }
`;

const Data = styled.div`
    margin-top: 20px;
    margin-bottom: 31px;
    width: 122px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: calc(100% - 51px);
`;

const Sales = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const X27632 = styled.div`
    ${PoppinsSemiBoldVulcan28px}
    min-height: 41px;
    margin-top: 20px;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

const Data1 = styled.div`
    .widgets-data-card-with-charts-1.widgets-data-card-with-charts-2 & {
        width: 143px;
        margin-left: 39px;
    }
`;

const Data2 = styled.div`
    .widgets-data-card-with-charts-1.widgets-data-card-with-charts-3 & {
        margin-bottom: 32px;
        width: 151px;
        min-height: calc(100% - 52px);
    }
`;

export default WidgetsDataCardWithCharts2;
