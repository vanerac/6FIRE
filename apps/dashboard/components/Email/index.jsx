import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalVulcan12px, LatoNormalComet10px } from '../../styledMixins';

function Email(props) {
    const { email, elodieElodieGmailCom, className } = props;

    return (
        <Email1 className={`email-1 ${className || ''}`}>
            <Email2 className="email-2">{email}</Email2>
            <Elodieelodiegmailcom className="elodieelodiegmailcom">{elodieElodieGmailCom}</Elodieelodiegmailcom>
            <Ligne6 className="ligne-6-2" src="/img/ligne-6-1@1x.png" />
        </Email1>
    );
}

const Email1 = styled.div`
    position: absolute;
    width: 268px;
    top: 53px;
    left: 19px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;

    &.email-1.prnom {
        left: 319px;
    }

    &.email-1.nom {
        left: 619px;
    }

    &.email-1.titre-article {
        top: 56px;
        left: 39px;
    }

    &.email-1.titre-3 {
        top: 56px;
        left: 39px;
    }

    &.email-1.titre-page {
        top: 56px;
        left: 39px;
    }

    &.email-1.titre-page-1 {
        top: 56px;
        left: 39px;
    }
`;

const Email2 = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Elodieelodiegmailcom = styled.div`
    ${PoppinsNormalVulcan12px}
    width: 234px;
    min-height: 19px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 267px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default Email;
