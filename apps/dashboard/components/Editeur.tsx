import React from 'react';
import styled from 'styled-components';
import { Border1pxSilver } from '../styledMixins';

function Editeur(props) {
    const { src } = props;

    return (
        <Editeur1>
            <NotesDetailsTextEditor src={src} />
        </Editeur1>
    );
}

const Editeur1 = styled.div`
    ${Border1pxSilver}
    position: absolute;
    height: 402px;
    top: 140px;
    left: 39px;
    display: flex;
    padding: 2px 9px;
    align-items: flex-start;
    min-width: 917px;
    background-color: var(--white);
`;

const NotesDetailsTextEditor = styled.img`
    width: 605px;
    height: 39px;
    object-fit: cover;
`;

const Editeur2 = styled.div`
    ${Border1pxSilver}
    position: absolute;
    height: 402px;
    top: 140px;
    left: 39px;
    display: flex;
    padding: 2px 9px;
    align-items: flex-start;
    min-width: 917px;
    background-color: var(--white);
`;

const NotesDetailsTextEditor1 = styled.img`
    width: 605px;
    height: 39px;
    object-fit: cover;
`;

export default Editeur;
