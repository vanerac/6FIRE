import React from 'react';
import styled from 'styled-components';

function BoutonPourSupprimer(props) {
    const { className } = props;

    return (
        <BoutonPourSupprimer1 className={`bouton-pour-supprimer ${className || ''}`}>
            <IconClose className="icon-close-2" src="/img/fontawsome--times--2@1x.png" />
        </BoutonPourSupprimer1>
    );
}

const BoutonPourSupprimer1 = styled.div`
    position: absolute;
    height: 20px;
    top: 67px;
    left: 1181px;
    display: flex;
    padding: 5.8px 5.8px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 20px;
    background-color: var(--torch-red);
    border-radius: 10px;

    &.bouton-pour-supprimer.bouton-pour-supprimer-1 {
        position: unset;
        top: unset;
        left: unset;
    }
`;

const IconClose = styled.img`
    width: 8px;
    height: 8px;
    object-fit: cover;
`;

export default BoutonPourSupprimer;
