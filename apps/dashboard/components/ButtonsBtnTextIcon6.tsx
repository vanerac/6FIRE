import React from 'react';
import Link from 'next/link';
import Groupe3932 from './Groupe3932';
import styled from 'styled-components';

function ButtonsBtnTextIcon6(props) {
    const { className, groupe3932Props } = props;

    return (
        <ButtonsBtnTextIcon className={`buttons-btn-text-icon-36 ${className || ''}`}>
            <Groupe3932 className={groupe3932Props.className}>{groupe3932Props.children}</Groupe3932>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 135px;
    height: 32px;
    position: relative;
    margin-left: 20px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 4px;

    &.buttons-btn-text-icon-36.buttons-btn-text-icon-37 {
        width: 133px;
        margin-left: 790px;
        margin-top: 1.5px;
        background-color: var(--caribbean-green);
        cursor: pointer;
    }
`;

export default ButtonsBtnTextIcon6;
