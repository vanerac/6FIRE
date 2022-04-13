import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function WidgetsElementsChartGraphLineBar(props) {
    const { name } = props;

    return (
        <WidgetsElementsChartGraphLineBar1>
            <Shape src="/img/shape@1x.png" />
            <Name>{name}</Name>
        </WidgetsElementsChartGraphLineBar1>
    );
}

const WidgetsElementsChartGraphLineBar1 = styled.div`
    width: 24px;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 367px;
`;

const Shape = styled.img`
    width: 1px;
    height: 336px;
    margin-right: 1px;
    object-fit: cover;
`;

const Name = styled.div`
    ${PoppinsNormalShadowBlue12px}
    margin-bottom: -1px;
    min-height: 19px;
    margin-top: 12px;
    min-width: 24px;
    text-align: center;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default WidgetsElementsChartGraphLineBar;
