import React from 'react';
import styled from 'styled-components';
import {
    LatoNormalComet10px,
    PoppinsNormalTundora12px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function IDFixe2(props) {
    const { dbut, date, ligne6, className } = props;

    return (
        <IDFixe className={`id-fixe-15 ${className || ''}`}>
            <Dbut className="dbut">{dbut}</Dbut>
            <FlexRow className="flex-row-15">
                <Date className="date-3">{date}</Date>
                <CalendarEvent className="calendar-event-1" src="/img/calendar-event-2@1x.png" />
            </FlexRow>
            <Ligne6 className="ligne-6-5" src={ligne6} />
        </IDFixe>
    );
}

const IDFixe = styled.div`
    width: 268px;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;

    &.id-fixe-15.id-fixe-16 {
        margin-left: 20px;
    }

    &.id-fixe-15.id-fixe-18 {
        margin-left: 20px;
    }

    &.id-fixe-15.id-fixe-19 {
        position: absolute;
        top: 56px;
        left: 39px;
        margin-left: unset;
    }
`;

const Dbut = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow = styled.div`
    height: 19px;
    margin-top: 3px;
    display: flex;
    align-items: flex-start;
    min-width: 262px;
`;

const Date = styled.div`
    ${PoppinsNormalTundora12px}
    width: 234px;
    min-height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const CalendarEvent = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 12px;
    object-fit: cover;
`;

const Ligne6 = styled.img`
    width: 267px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default IDFixe2;
