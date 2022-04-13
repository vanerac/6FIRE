import React from 'react';
import styled from 'styled-components';

function WidgetsElementsChartMiniChart(props) {
    const { chart, path4Copy8, className } = props;

    return (
        <WidgetsElementsChartMiniChart1 className={`widgets-_-elements-chart-mini-chart ${className || ''}`}>
            <Chart className="chart" style={{ backgroundImage: `url(${chart})` }}>
                <Path4Copy8 className="path-4-copy-8" src={path4Copy8} />
            </Chart>
        </WidgetsElementsChartMiniChart1>
    );
}

const WidgetsElementsChartMiniChart1 = styled.div`
    margin-bottom: -9.2px;
    width: 156px;
    height: 43px;
    margin-right: 20px;
    display: flex;

    &.widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-1 {
        margin-bottom: -14.8px;
        margin-right: 21px;
    }

    &.widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-2 {
        margin-bottom: -12.4px;
        width: 156.20208740234375px;
        height: 38px;
        margin-right: 23.8px;
    }

    &.widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-3 {
        margin-bottom: -15.1px;
    }
`;

const Chart = styled.div`
    margin-left: 0;
    margin-right: 0;
    flex: 1;
    width: 155.76470947265625px;
    display: flex;
    background-size: cover;
    background-position: 50% 50%;
`;

const Path4Copy8 = styled.img`
    margin-top: -0.5px;
    height: 35.212646484375px;
    margin-left: -0.1px;
    margin-right: -0.1px;
    flex: 1;
    object-fit: cover;
`;

const Chart1 = styled.div`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-1 & {
        margin-top: 0;
        width: 155.7646484375px;
        margin-left: unset;
        margin-right: unset;
    }
`;

const Path4Copy81 = styled.img`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-1 & {
        margin-top: -0.6px;
        height: 30.9542236328125px;
        margin-right: -0.3px;
    }
`;

const Chart2 = styled.div`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-2 & {
        width: 155.7646484375px;
        margin-left: unset;
        margin-right: unset;
    }
`;

const Path4Copy82 = styled.img`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-2 & {
        margin-top: -0.6px;
        height: 25.974029541015625px;
        margin-right: -0.3px;
    }
`;

const Chart3 = styled.div`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-3 & {
        width: 155.7646484375px;
    }
`;

const Path4Copy83 = styled.img`
    .widgets-_-elements-chart-mini-chart.widgets-_-elements-chart-mini-chart-3 & {
        height: 35.2127685546875px;
    }
`;

export default WidgetsElementsChartMiniChart;
