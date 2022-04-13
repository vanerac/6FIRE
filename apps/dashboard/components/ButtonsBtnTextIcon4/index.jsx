import React from 'react';
import Link from 'next/link';
import Groupe393 from '../Groupe393';
import styled from 'styled-components';

function ButtonsBtnTextIcon4(props) {
    const { className, groupe393Props } = props;

    return (
        <ButtonsBtnTextIcon className={`buttons-btn-text-icon-22 ${className || ''}`}>
            <Groupe393 className={groupe393Props.className}>{groupe393Props.children}</Groupe393>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 182px;
    height: 32px;
    position: relative;
    margin-left: 6px;
    display: flex;
    background-color: #ffb91c;
    border-radius: 4px;

    &.buttons-btn-text-icon-22.buttons-btn-text-icon-23 {
        width: 181px;
        background-color: var(--comet);
    }

    &.buttons-btn-text-icon-22.buttons-btn-text-icon-24 {
        width: 181px;
        margin-left: 679px;
        margin-top: 18.5px;
        background-color: var(--caribbean-green);
        cursor: pointer;
    }

    &.buttons-btn-text-icon-22.buttons-btn-text-icon-25 {
        width: 181px;
        align-self: flex-end;
        margin-left: 782px;
        background-color: var(--caribbean-green);
    }

    &.buttons-btn-text-icon-22.buttons-btn-text-icon-26 {
        width: 181px;
        align-self: flex-end;
        margin-left: 782px;
        background-color: var(--caribbean-green);
    }
`;

export default ButtonsBtnTextIcon4;
