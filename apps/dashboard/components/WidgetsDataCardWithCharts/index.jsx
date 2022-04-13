import React from 'react';
import WidgetsElementsPrice from '../WidgetsElementsPrice';
import WidgetsElementsChartMiniChart from '../WidgetsElementsChartMiniChart';
import styled from 'styled-components';
import { PoppinsSemiBoldVulcan28px, PoppinsNormalShadowBlue16px } from '../../styledMixins';

function WidgetsDataCardWithCharts(props) {
    const { sales, x27632, widgetsElementsChartMiniChartProps } = props;

    return (
        <WidgetsDataCardWithCharts1>
            <Data>
                <Sales>{sales}</Sales>
                <OverlapGroup>
                    <X27632>{x27632}</X27632>
                    <WidgetsElementsPrice />
                </OverlapGroup>
            </Data>
            <WidgetsElementsChartMiniChart
                chart={widgetsElementsChartMiniChartProps.chart}
                path4Copy8={widgetsElementsChartMiniChartProps.path4Copy8}
            />
        </WidgetsDataCardWithCharts1>
    );
}

const WidgetsDataCardWithCharts1 = styled.div`
    width: 410px;
    height: 150px;
    position: relative;
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 1px 4px #15223214;
`;

const Data = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 147px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: calc(100% - 40px);
`;

const Sales = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    margin-top: 4px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const OverlapGroup = styled.div`
    width: 147px;
    height: 62px;
    position: relative;
    margin-top: 20px;
`;

const X27632 = styled.div`
    ${PoppinsSemiBoldVulcan28px}
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

export default WidgetsDataCardWithCharts;
