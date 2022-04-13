import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumMirage10px } from '../styledMixins';

function Filtre(props) {
    const { name, className } = props;

    return (
        <Filtre1 className={`filtre ${className || ''}`}>
            <Name className="name-23">{name}</Name>
            <FontAwsomechevronDown
                className="font-awsome-chevron-down"
                src="/img/fontawsome--chevron-down--10@1x.png"
            />
        </Filtre1>
    );
}

const Filtre1 = styled.div`
    height: 37px;
    margin-left: 7px;
    display: flex;
    padding: 6.5px 9.7px;
    justify-content: flex-end;
    align-items: center;
    min-width: 77px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;

    &.filtre.filtre-1 {
        padding: 6.5px 12.4px;
        min-width: 131px;
    }

    &.filtre.filtre-2 {
        padding: 6.5px 7.4px;
        min-width: 131px;
    }

    &.filtre.filtre-3 {
        padding: 6.5px 7.4px;
        min-width: 131px;
    }

    &.filtre.filtre-5 {
        padding: 6.5px 12.4px;
        min-width: 131px;
    }

    &.filtre.filtre-6 {
        margin-left: 3px;
        padding: 6.5px 12.1px;
        min-width: 159px;
        justify-content: unset;
    }

    &.filtre.filtre-8 {
        padding: 6.5px 16.4px;
        min-width: 159px;
    }

    &.filtre.filtre-9 {
        position: absolute;
        top: 62px;
        left: 39px;
        padding: 6.5px 16.4px;
        min-width: 159px;
        margin-left: unset;
    }

    &.filtre.filtre-10 {
        position: absolute;
        top: 58px;
        left: 39px;
        padding: 6.5px 16.4px;
        min-width: 432px;
        margin-left: unset;
    }

    &.filtre.filtre-11 {
        position: absolute;
        top: 62px;
        left: 39px;
        padding: 6.5px 16.4px;
        min-width: 159px;
        margin-left: unset;
    }

    &.filtre.filtre-12 {
        position: absolute;
        top: 58px;
        left: 39px;
        padding: 6.5px 16.4px;
        min-width: 432px;
        margin-left: unset;
    }

    &.filtre.filtre-13 {
        position: absolute;
        top: 62px;
        left: 39px;
        padding: 6.5px 16.4px;
        min-width: 159px;
        margin-left: unset;
    }

    &.filtre.filtre-15 {
        align-self: flex-end;
    }

    &.filtre.filtre-19 {
        margin-left: 21px;
    }
`;

const Name = styled.div`
    ${PoppinsMediumMirage10px}
    min-height: 17px;
    align-self: flex-end;
    min-width: 44px;
    text-align: center;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const FontAwsomechevronDown = styled.img`
    width: 8px;
    height: 5px;
    margin-left: 4px;
    object-fit: cover;
`;

const Name1 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-1  & {
        min-width: 96px;
    }
`;

const FontAwsomechevronDown1 = styled.img`
    .filtre.filtre-1 & {
        margin-left: 2px;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-2  & {
        min-width: 102px;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-3  & {
        min-width: 106px;
    }
`;

const FontAwsomechevronDown2 = styled.img`
    .filtre.filtre-3 & {
        margin-left: 2px;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-4  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown3 = styled.img`
    .filtre.filtre-4 & {
        margin-left: 8px;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-5  & {
        min-width: 96px;
    }
`;

const FontAwsomechevronDown4 = styled.img`
    .filtre.filtre-5 & {
        margin-left: 2px;
    }
`;

const Name6 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-6  & {
        min-width: 96px;
    }
`;

const FontAwsomechevronDown5 = styled.img`
    .filtre.filtre-6 & {
        margin-left: 8px;
        margin-bottom: 0;
    }
`;

const Name7 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-7  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown6 = styled.img`
    .filtre.filtre-7 & {
        margin-left: 8px;
    }
`;

const Name8 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-8  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown7 = styled.img`
    .filtre.filtre-8 & {
        margin-left: 33px;
    }
`;

const Name9 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-9  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown8 = styled.img`
    .filtre.filtre-9 & {
        margin-left: 33px;
    }
`;

const Name10 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-10  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown9 = styled.img`
    .filtre.filtre-10 & {
        margin-left: 284px;
    }
`;

const Name11 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-11  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown10 = styled.img`
    .filtre.filtre-11 & {
        margin-left: 33px;
    }
`;

const Name12 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-12  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown11 = styled.img`
    .filtre.filtre-12 & {
        margin-left: 284px;
    }
`;

const Name13 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-13  & {
        min-width: 82px;
    }
`;

const FontAwsomechevronDown12 = styled.img`
    .filtre.filtre-13 & {
        margin-left: 33px;
    }
`;

const Name14 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-14  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown13 = styled.img`
    .filtre.filtre-14 & {
        margin-left: 8px;
    }
`;

const Name15 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-15  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown14 = styled.img`
    .filtre.filtre-15 & {
        margin-left: 8px;
    }
`;

const Name16 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-16  & {
        min-width: 22px;
    }
`;

const FontAwsomechevronDown15 = styled.img`
    .filtre.filtre-16 & {
        margin-left: 15px;
    }
`;

const Name17 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-17  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown16 = styled.img`
    .filtre.filtre-17 & {
        margin-left: 8px;
    }
`;

const Name18 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-18  & {
        min-width: 22px;
    }
`;

const FontAwsomechevronDown17 = styled.img`
    .filtre.filtre-18 & {
        margin-left: 15px;
    }
`;

const Name19 = styled.div`
    ${PoppinsMediumMirage10px}

    .filtre.filtre-19  & {
        min-width: 36px;
    }
`;

const FontAwsomechevronDown18 = styled.img`
    .filtre.filtre-19 & {
        margin-left: 8px;
    }
`;

export default Filtre;
