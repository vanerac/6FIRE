import React from 'react';
import styled from 'styled-components';
import { MuliBoldWhite13px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function TabGroupElementsRegularTab2States2(props) {
    const { children, className } = props;

    return (
        <TabGroupElementsRegularTab2States className={`tab-group-_-elements-4 ${className || ''}`}>
            <Name className="name-4">{children}</Name>
        </TabGroupElementsRegularTab2States>
    );
}

const TabGroupElementsRegularTab2States = styled.div`
    height: 34px;
    margin-left: 1px;
    display: flex;
    padding: 6px 9px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 68px;
    background-color: var(--blue-ribbon);
    border-radius: 4px;

    &.tab-group-_-elements-4.tab-group-_-elements-5 {
        min-width: 64px;
    }
`;

const Name = styled.div`
    ${MuliBoldWhite13px}
    min-height: 18px;
    min-width: 48px;
    letter-spacing: 0;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${MuliBoldWhite13px}

    .tab-group-_-elements-4.tab-group-_-elements-5  & {
        min-width: 44px;
    }
`;

export default TabGroupElementsRegularTab2States2;
