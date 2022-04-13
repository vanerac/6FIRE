import React from 'react';
import Groupe3933 from '../Groupe3933';
import styled from 'styled-components';

function ButtonsBtnTextIcon7(props) {
    const { className, groupe3933Props } = props;

    return (
        <ButtonsBtnTextIcon className={`buttons-btn-text-icon-38 ${className || ''}`}>
            <Groupe3933 className={groupe3933Props.className}>{groupe3933Props.children}</Groupe3933>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 122px;
    height: 32px;
    position: relative;
    margin-left: 705px;
    margin-bottom: 2px;
    display: flex;
    background-color: var(--caribbean-green);
    border-radius: 4px;

    &.buttons-btn-text-icon-38.buttons-btn-text-icon-39 {
        position: absolute;
        width: 121px;
        top: 79px;
        left: 974px;
        background-color: var(--blue-ribbon);
        margin-left: unset;
        margin-bottom: unset;
    }
`;

export default ButtonsBtnTextIcon7;
