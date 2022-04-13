import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px } from '../../styledMixins';

function WidgetsElementsChartGraphDoubleBar(props) {
    const { greenBar, blueBar, month } = props;

    return (
        <WidgetsElementsChartGraphDoubleBar1>
            <Bars>
                <GreenBar src={greenBar} />
                <BlueBar src={blueBar} />
            </Bars>
            <Month>{month}</Month>
        </WidgetsElementsChartGraphDoubleBar1>
    );
}

const WidgetsElementsChartGraphDoubleBar1 = styled.div`
    width: 42px;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 246px;
`;

const Bars = styled.div`
    width: 21px;
    height: 219px;
    margin-right: 3px;
    display: flex;
    justify-content: space-between;
`;

const GreenBar = styled.img`
    margin-top: 28px;
    width: 8px;
    object-fit: cover;
`;

const BlueBar = styled.img`
    width: 8px;
    object-fit: cover;
`;

const Month = styled.div`
    ${PoppinsNormalShadowBlue12px}
    margin-bottom: -1px;
    min-height: 19px;
    margin-top: 9px;
    min-width: 42px;
    text-align: center;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default WidgetsElementsChartGraphDoubleBar;
