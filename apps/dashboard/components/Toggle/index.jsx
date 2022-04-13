import React from 'react';
import styled from 'styled-components';
import { ArialBoldWhite6px, LatoNormalComet10px } from '../../styledMixins';

function Toggle(props) {
    const { activerLesSmsLinscription, className } = props;

    return (
        <Toggle1 className={`toggle ${className || ''}`}>
            <Toggle2 className="toggle-1">
                <ToggleOff className="toggle-off">
                    <Rectangle656 className="rectangle-656"></Rectangle656>
                    <OFF className="off">OFF</OFF>
                </ToggleOff>
            </Toggle2>
            <ActiverLesSMSLinscription className="activer-les-sms-linscription">
                {activerLesSmsLinscription}
            </ActiverLesSMSLinscription>
        </Toggle1>
    );
}

const Toggle1 = styled.div`
    position: absolute;
    width: 1191px;
    height: 21px;
    top: 59px;
    left: 39px;
    display: flex;
    align-items: flex-end;

    &.toggle.priode-dessai {
        top: 166px;
    }
`;

const Toggle2 = styled.div`
    width: 46px;
    display: flex;
`;

const ToggleOff = styled.div`
    flex: 1;
    display: flex;
    padding: 0 2px;
    align-items: center;
    min-width: 46px;
    background-color: var(--sail);
    border-radius: 40px;
`;

const Rectangle656 = styled.div`
    width: 17px;
    height: 17px;
    background-color: var(--white);
    border-radius: 40px;
`;

const OFF = styled.div`
    ${ArialBoldWhite6px}
    min-height: 8px;
    margin-left: 4px;
    margin-top: 1px;
    min-width: 14px;
    letter-spacing: 0;
    line-height: 6px;
    white-space: nowrap;
`;

const ActiverLesSMSLinscription = styled.p`
    ${LatoNormalComet10px}
    margin-bottom: -4px;
    width: 1133px;
    height: 14px;
    margin-left: 12px;
    margin-right: -2px;
    flex: 1;
    letter-spacing: 0;
    line-height: 10px;
`;

export default Toggle;
