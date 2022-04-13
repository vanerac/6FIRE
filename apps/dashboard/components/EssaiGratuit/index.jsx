import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../../styledMixins';

function EssaiGratuit(props) {
    const { name, className } = props;

    return (
        <EssaiGratuit1 className={`essai-gratuit-1 ${className || ''}`}>
            <Name className="name-85">{name}</Name>
        </EssaiGratuit1>
    );
}

const EssaiGratuit1 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-image: url(/img/frame-11@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Name = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    min-width: 90px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.code-gratuit-1  & {
        min-width: 92px;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.code-gratuit-2  & {
        min-width: 92px;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.essai-gratuit-2  & {
        text-decoration: underline;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.code-gratuit-3  & {
        min-width: 92px;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.essai-gratuit-3  & {
        text-decoration: underline;
    }
`;

const Name6 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.code-gratuit-4  & {
        min-width: 92px;
    }
`;

const Name7 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .essai-gratuit-1.code-gratuit-5  & {
        min-width: 92px;
        text-decoration: underline;
    }
`;

export default EssaiGratuit;
