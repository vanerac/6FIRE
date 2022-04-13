import React from 'react';
import styled from 'styled-components';
import { MuliSemiBoldVulcan13px } from '../styledMixins';

function TabGroupElementsRegularTab2States(props) {
    const { children, className } = props;

    return (
        <TabGroupElementsRegularTab2States1 className={`tab-group-_-elements ${className || ''}`}>
            <Name className="name-3">{children}</Name>
        </TabGroupElementsRegularTab2States1>
    );
}

const TabGroupElementsRegularTab2States1 = styled.div`
    height: 34px;
    display: flex;
    padding: 6px 9px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 53px;
    background-color: var(--white);
    border-radius: 4px;

    &.tab-group-_-elements.tab-group-_-elements-1 {
        margin-left: 1px;
        min-width: 63px;
    }

    &.tab-group-_-elements.tab-group-_-elements-3 {
        margin-left: 1px;
        min-width: 67px;
    }
`;

const Name = styled.div`
    ${MuliSemiBoldVulcan13px}
    min-height: 18px;
    min-width: 33px;
    letter-spacing: 0;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${MuliSemiBoldVulcan13px}

    .tab-group-_-elements.tab-group-_-elements-1  & {
        min-width: 43px;
    }
`;

const Name2 = styled.div`
    ${MuliSemiBoldVulcan13px}

    .tab-group-_-elements.tab-group-_-elements-3  & {
        min-width: 47px;
    }
`;

export default TabGroupElementsRegularTab2States;
