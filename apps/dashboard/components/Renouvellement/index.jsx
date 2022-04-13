import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalTundora12px } from '../../styledMixins';

function Renouvellement(props) {
    const { renouvellement, className } = props;

    return (
        <Renouvellement1 className={`renouvellement ${className || ''}`}>
            <Renouvellement2 className="renouvellement-1">{renouvellement}</Renouvellement2>
            <IconCheckMark className="icon-check_mark" src="/img/fontawsome--check-square--4@1x.png" />
        </Renouvellement1>
    );
}

const Renouvellement1 = styled.div`
    width: 123px;
    height: 18px;
    display: flex;
    justify-content: space-between;

    &.renouvellement.renouvellement-2 {
        margin-left: 20px;
    }

    &.renouvellement.renouvellement-4 {
        margin-left: 20px;
    }
`;

const Renouvellement2 = styled.div`
    ${PoppinsNormalTundora12px}
    width: 101px;
    height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const IconCheckMark = styled.img`
    margin-top: 0;
    margin-bottom: 0;
    width: 17.55908203125px;
    margin-right: 0;
    object-fit: cover;
`;

export default Renouvellement;
