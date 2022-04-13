import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalTundora12px } from '../../styledMixins';

function EmailConfirm(props) {
    const { emailConfirm, className } = props;

    return (
        <EmailConfirm1 className={`email-confirm ${className || ''}`}>
            <EmailConfirm2 className="email-confirm-1">{emailConfirm}</EmailConfirm2>
            <Membre className="membre-1"></Membre>
        </EmailConfirm1>
    );
}

const EmailConfirm1 = styled.div`
    position: absolute;
    width: 116px;
    height: 19px;
    top: 73px;
    left: 353px;
    display: flex;
    justify-content: space-between;

    &.email-confirm.email-confirm-2 {
        left: 536px;
    }
`;

const EmailConfirm2 = styled.div`
    ${PoppinsNormalTundora12px}
    height: 19px;
    width: 95px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Membre = styled.div`
    margin-top: 1.4px;
    width: 17.55908203125px;
    background-image: url(/img/fontawsome--check-square--10@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

export default EmailConfirm;
