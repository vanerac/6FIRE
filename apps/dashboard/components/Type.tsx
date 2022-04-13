import React from 'react';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsNormalTundora12px } from '../styledMixins';

function Type(props) {
    const { type, mensuel, className } = props;

    return (
        <Type1 className={`type ${className || ''}`}>
            <Type2 className="type-1">{type}</Type2>
            <FlexRow className="flex-row-46">
                <Mensuel className="mensuel">{mensuel}</Mensuel>
                <FontAwsomechevronDown
                    className="font-awsome-chevron-down-1"
                    src="/img/fontawsome--chevron-down--10@1x.png"
                />
            </FlexRow>
            <Ligne6 className="ligne-6-15" src="/img/ligne-6-46@1x.png" />
        </Type1>
    );
}

const Type1 = styled.div`
    position: absolute;
    width: 187px;
    top: 62px;
    left: 993px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;

    &.type.type-2 {
        top: 208px;
        left: 675px;
    }

    &.type.abonnement-15 {
        flex: 1;
        width: 186.845947265625px;
        min-height: 100%;
        position: unset;
        top: unset;
        left: unset;
    }

    &.type.type-3 {
        top: 112px;
        left: 987px;
    }

    &.type.abonnement-16 {
        flex: 1;
        width: 186.845947265625px;
        min-height: 100%;
        position: unset;
        top: unset;
        left: unset;
    }
`;

const Type2 = styled.div`
    ${LatoNormalComet10px}
    width: 163px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow = styled.div`
    height: 19px;
    margin-top: 3px;
    display: flex;
    align-items: center;
    min-width: 174px;
`;

const Mensuel = styled.div`
    ${PoppinsNormalTundora12px}
    width: 153px;
    min-height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const FontAwsomechevronDown = styled.img`
    width: 8px;
    height: 5px;
    margin-left: 13px;
    margin-bottom: 2px;
    object-fit: cover;
`;

const Ligne6 = styled.img`
    width: 186px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default Type;
