import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumTundora10px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Row1() {
    return (
        <Row11>
            <Name>1</Name>
            <Name1>Cjuidofi</Name1>
            <FontAwsomepen src="/img/fontawsome--pen--12@1x.png" />
            <IconClose src="/img/fontawsome--times--10@1x.png" />
        </Row11>
    );
}

const Row11 = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 17.5px 30px;
    align-items: center;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 6px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 156px;
    min-width: 41px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 944px;
    margin-top: 3px;
    object-fit: cover;
`;

const IconClose = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-top: 3px;
    object-fit: cover;
`;

const Groupe454 = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 17.5px 30px;
    align-items: center;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name2 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 6px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 156px;
    min-width: 41px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const FontAwsomepen1 = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 944px;
    margin-top: 3px;
    object-fit: cover;
`;

const IconClose1 = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-top: 3px;
    object-fit: cover;
`;

export default Row1;
