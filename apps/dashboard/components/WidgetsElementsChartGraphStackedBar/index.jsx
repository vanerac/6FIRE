import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px } from '../../styledMixins';

function WidgetsElementsChartGraphStackedBar(props) {
    const { children } = props;

    return (
        <WidgetsElementsChartGraphStackedBar1>
            <Data>
                <Rectangle611></Rectangle611>
                <Rectangle610></Rectangle610>
                <Rectangle607></Rectangle607>
            </Data>
            <Name>{children}</Name>
        </WidgetsElementsChartGraphStackedBar1>
    );
}

const WidgetsElementsChartGraphStackedBar1 = styled.div`
    width: 24px;
    margin-left: 35px;
    margin-bottom: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 202px;
`;

const Data = styled.div`
    width: 8px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 175px;
`;

const Rectangle611 = styled.div`
    width: 8px;
    height: 42px;
    background-color: var(--geyser);
`;

const Rectangle610 = styled.div`
    width: 8px;
    height: 54px;
    margin-top: 5px;
    background-color: var(--blue-jeans);
`;

const Rectangle607 = styled.div`
    width: 8px;
    height: 69px;
    margin-top: 5px;
    background-color: var(--blue-ribbon-3);
`;

const Name = styled.div`
    ${PoppinsNormalShadowBlue12px}
    margin-bottom: -5px;
    min-height: 19px;
    margin-top: 7px;
    min-width: 24px;
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
`;

export default WidgetsElementsChartGraphStackedBar;
