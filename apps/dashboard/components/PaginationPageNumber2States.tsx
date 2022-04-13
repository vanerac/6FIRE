import React from 'react';
import styled from 'styled-components';

function PaginationPageNumber2States(props) {
    const { children } = props;

    return (
        <PaginationPageNumber2States1>
            <Number>{children}</Number>
        </PaginationPageNumber2States1>
    );
}

const PaginationPageNumber2States1 = styled.div`
    height: 36px;
    margin-left: 6px;
    display: flex;
    padding: 4.5px 13px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 36px;
    background-color: var(--blue-ribbon);
    border-radius: 4px;
`;

const Number = styled.div`
    min-height: 25px;
    min-width: 8px;
    font-family: var(--font-family-poppins);
    font-weight: 400;
    color: var(--white);
    font-size: var(--font-size-xl);
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
`;

export default PaginationPageNumber2States;
