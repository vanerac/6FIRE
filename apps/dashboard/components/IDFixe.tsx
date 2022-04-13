import React from 'react';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsNormalTundora12px } from '../styledMixins';

function IDFixe(props) {
    const { idUser, number, ligne6, className } = props;

    return (
        <IDFixe1 className={`id-fixe ${className || ''}`}>
            <IDUser className="id-user">{idUser}</IDUser>
            <Number className="number-2">{number}</Number>
            <Ligne6 className="ligne-6-3" src={ligne6} />
        </IDFixe1>
    );
}

const IDFixe1 = styled.div`
    position: absolute;
    width: 268px;
    top: 53px;
    left: 919px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;

    &.id-fixe.id-fixe-1 {
        left: 19px;
    }

    &.id-fixe.id-fixe-2 {
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-3 {
        margin-top: 17px;
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-4 {
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-5 {
        margin-top: 17px;
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-6 {
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-7 {
        margin-top: 17px;
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-8 {
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-9 {
        margin-top: 17px;
        position: unset;
        top: unset;
        left: unset;
    }

    &.id-fixe.id-fixe-10 {
        top: 62px;
        left: 225px;
    }

    &.id-fixe.id-fixe-11 {
        top: 71px;
        left: 259px;
    }

    &.id-fixe.id-fixe-12 {
        top: 62px;
        left: 225px;
    }

    &.id-fixe.id-fixe-13 {
        top: 71px;
        left: 259px;
    }

    &.id-fixe.thme-slectionn {
        top: 62px;
        left: 39px;
    }

    &.id-fixe.url {
        top: 62px;
        left: 357px;
    }

    &.id-fixe.nom-1 {
        top: 62px;
        left: 39px;
    }

    &.id-fixe.prix {
        top: 62px;
        left: 357px;
    }

    &.id-fixe.dure {
        top: 62px;
        left: 675px;
    }

    &.id-fixe.nom-2 {
        top: 62px;
        left: 39px;
    }

    &.id-fixe.prix-1 {
        top: 62px;
        left: 357px;
    }

    &.id-fixe.dure-1 {
        top: 62px;
        left: 675px;
    }

    &.id-fixe.prix-2 {
        top: 208px;
        left: 39px;
    }

    &.id-fixe.dure-2 {
        top: 208px;
        left: 357px;
    }

    &.id-fixe.nom-3 {
        top: 62px;
        left: 39px;
    }

    &.id-fixe.rduction {
        top: 62px;
        left: 675px;
    }

    &.id-fixe.prix-3 {
        top: 112px;
        left: 306px;
    }

    &.id-fixe.dure-3 {
        top: 112px;
        left: 675px;
    }

    &.id-fixe.prix-4 {
        top: 56px;
        left: 39px;
    }
`;

const IDUser = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Number = styled.div`
    ${PoppinsNormalTundora12px}
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

export default IDFixe;
