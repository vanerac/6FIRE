import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalComet14px } from '../styledMixins';

function Legend(props) {
    const { children, className } = props;

    return (
        <Legend1 className={`legend-1 ${className || ''}`}>
            <Shape className="shape-1"></Shape>
            <MarketingSales className="marketing-sales">{children}</MarketingSales>
        </Legend1>
    );
}

const Legend1 = styled.div`
    display: flex;
    align-items: flex-start;
    min-width: 65px;

    &.legend-1.online {
        flex: 1;
        min-width: 172px;
    }
`;

const Shape = styled.div`
    width: 10px;
    height: 10px;
    align-self: center;
    background-color: var(--caribbean-green);
    border-radius: 6px;
`;

const MarketingSales = styled.div`
    ${PoppinsNormalComet14px}
    min-height: 22px;
    margin-left: 8px;
    margin-top: -2px;
    letter-spacing: 0.1px;
    line-height: 24px;
    white-space: nowrap;
`;

const Shape1 = styled.div`
    .legend-1.legend-2 & {
        background-color: var(--blue-ribbon);
    }
`;

const Shape2 = styled.div`
    .legend-1.online & {
        background-color: var(--blue-ribbon-3);
    }
`;

export default Legend;
