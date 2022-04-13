import React from 'react';
import ButtonsBtnTextIcon2 from './ButtonsBtnTextIcon2';
import styled from 'styled-components';

function Date(props) {
    const { className, buttonsBtnTextIcon2Props } = props;

    return (
        <Date1 className={`date ${className || ''}`}>
            <ButtonsBtnTextIcon2
                iconsNavigationIcon12StatesProps={buttonsBtnTextIcon2Props.iconsNavigationIcon12StatesProps}
            />
        </Date1>
    );
}

const Date1 = styled.div`
    width: 199px;
    position: relative;
    display: flex;

    &.date.date-1 {
        height: 36px;
        margin-left: 493px;
        margin-bottom: 1px;
    }
`;

export default Date;
