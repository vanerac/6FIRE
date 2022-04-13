import React from 'react';
import Groupe39342 from './Groupe39342';
import styled from 'styled-components';

function ButtonsBtnTextIcon82(props) {
    const { className, groupe3934Props } = props;

    return (
        <ButtonsBtnTextIcon className={`buttons-btn-text-icon-42 ${className || ''}`}>
            <Groupe39342 className={groupe3934Props.className}>{groupe3934Props.children}</Groupe39342>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 154px;
    height: 32px;
    position: relative;
    align-self: flex-end;
    margin-left: 884px;
    display: flex;
    background-color: var(--caribbean-green);
    border-radius: 4px;

    &.buttons-btn-text-icon-42.buttons-btn-text-icon-43 {
        width: 155px;
        margin-left: 697px;
    }
`;

export default ButtonsBtnTextIcon82;
