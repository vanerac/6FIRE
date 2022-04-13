import React from 'react';
import { Link } from 'react-router-dom';
import Groupe3934 from '../Groupe3934';
import styled from 'styled-components';

function ButtonsBtnTextIcon8(props) {
    const { className } = props;

    return (
        <Link to="/abonnement-code-promo-creer">
            <ButtonsBtnTextIcon className={`buttons-btn-text-icon-40 ${className || ''}`}>
                <Groupe3934 />
            </ButtonsBtnTextIcon>
        </Link>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 176px;
    height: 32px;
    position: relative;
    margin-left: 593px;
    margin-bottom: 2px;
    display: flex;
    background-color: var(--caribbean-green);
    border-radius: 4px;
    cursor: pointer;

    &.buttons-btn-text-icon-40.buttons-btn-text-icon-41 {
        margin-left: 677px;
        cursor: unset;
    }
`;

export default ButtonsBtnTextIcon8;
