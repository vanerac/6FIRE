import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalBlueBell12px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Day(props) {
    const { className } = props;

    return (
        <Day1 className={`day-5 ${className || ''}`}>
            <Rectangle615 className="rectangle-615-5"></Rectangle615>
            <Text1 className="text-1-1">28/03</Text1>
        </Day1>
    );
}

const Day1 = styled.div`
    position: absolute;
    width: 42px;
    top: 55px;
    left: 57px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 71px;

    &.day-5.day-6 {
        left: 597px;
    }
`;

const Rectangle615 = styled.div`
    width: 7px;
    height: 39px;
    margin-right: 3px;
    background-color: var(--blue-ribbon);
`;

const Text1 = styled.div`
    ${PoppinsNormalBlueBell12px}
    width: 42px;
    margin-bottom: -1px;
    min-height: 19px;
    margin-top: 11px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default Day;
