import React from 'react';
import styled from 'styled-components';

function IcSearch(props) {
    const { className } = props;

    return (
        <IcSearch1 className={`ic-search ${className || ''}`}>
            <Color className="color" src="/img/color-10@1x.png" />
        </IcSearch1>
    );
}

const IcSearch1 = styled.div`
    width: 24px;
    height: 24px;
    display: flex;

    &.ic-search.x00-general-01-icons {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-1 {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-2 {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-3 {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-4 {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-5 {
        height: unset;
    }

    &.ic-search.x00-general-01-icons-6 {
        height: unset;
    }
`;

const Color = styled.img`
    margin-top: 3px;
    margin-left: 3px;
    width: 16.999649047851562px;
    margin-bottom: 4px;
    object-fit: cover;
`;

const Color1 = styled.img`
    .ic-search.x00-general-01-icons & {
        width: 16.999755859375px;
    }
`;

const Color2 = styled.img`
    .ic-search.x00-general-01-icons-1 & {
        width: 16.999755859375px;
    }
`;

const Color3 = styled.img`
    .ic-search.x00-general-01-icons-2 & {
        width: 16.999755859375px;
    }
`;

const Color4 = styled.img`
    .ic-search.x00-general-01-icons-3 & {
        width: 16.999755859375px;
    }
`;

const Color5 = styled.img`
    .ic-search.x00-general-01-icons-4 & {
        width: 16.999755859375px;
    }
`;

const Color6 = styled.img`
    .ic-search.x00-general-01-icons-5 & {
        width: 16.999755859375px;
    }
`;

const Color7 = styled.img`
    .ic-search.x00-general-01-icons-6 & {
        width: 16.999755859375px;
    }
`;

export default IcSearch;
