import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue16px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function PaginationPageNumber2States2(props) {
    const { children, className } = props;

    return (
        <PaginationPageNumber2States className={`pagination-page-number-2-states-1 ${className || ''}`}>
            <Number className="number-1">{children}</Number>
        </PaginationPageNumber2States>
    );
}

const PaginationPageNumber2States = styled.div`
    height: 36px;
    display: flex;
    padding: 4.5px 11px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 36px;

    &.pagination-page-number-2-states-1.pagination-page-number-2-states-3 {
        padding: 4.5px 9px;
    }
`;

const Number = styled.div`
    ${PoppinsNormalShadowBlue16px}
    min-height: 25px;
    min-width: 12px;
    text-align: center;
    letter-spacing: 0;
    line-height: 24px;
    white-space: nowrap;
`;

const Number1 = styled.div`
    ${PoppinsNormalShadowBlue16px}

    .pagination-page-number-2-states-1.pagination-page-number-2-states-3  & {
        min-width: 16px;
    }
`;

export default PaginationPageNumber2States2;
