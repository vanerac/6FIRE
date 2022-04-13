import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function GestionAbonnements(props) {
    const { children, className } = props;

    return (
        <GestionAbonnements1 className={`gestion-abonnements ${className || ''}`}>
            <Name className="name-77">{children}</Name>
        </GestionAbonnements1>
    );
}

const GestionAbonnements1 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-color: var(--blue-ribbon-2);
`;

const Name = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 161px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.gestion-abonnements-1  & {
        text-decoration: underline;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.code-promo-1  & {
        min-width: 92px;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.code-promo-2  & {
        min-width: 92px;
        text-decoration: underline;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.code-promo-3  & {
        min-width: 92px;
        text-decoration: underline;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.code-promo-4  & {
        min-width: 92px;
    }
`;

const Name6 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .gestion-abonnements.code-promo-5  & {
        min-width: 92px;
    }
`;

export default GestionAbonnements;
