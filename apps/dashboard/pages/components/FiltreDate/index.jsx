import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalComet12px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function FiltreDate(props) {
    const { calendarEvent, text } = props;

    return (
        <FiltreDate1>
            <CalendarEvent src={calendarEvent} />
            <Text>{text}</Text>
        </FiltreDate1>
    );
}

const FiltreDate1 = styled.div`
    width: 173px;
    height: 37px;
    margin-left: 7px;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const CalendarEvent = styled.img`
    margin-left: 10px;
    height: 21px;
    width: 21px;
    object-fit: cover;
`;

const Text = styled.p`
    ${PoppinsNormalComet12px}
    align-self: flex-end;
    margin-bottom: -5.8px;
    width: 125px;
    height: 19px;
    margin-right: 7px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

export default FiltreDate;
