import React from 'react';
import styled from 'styled-components';

function IconFeatherCopy(props) {
    const { className } = props;

    return (
        <IconFeatherCopy1 className={`icon-feather-copy ${className || ''}`}>
            <TracContainer className="trac-container-1">
                <Trac997 className="trac-997" src="/img/trac--997-1@1x.png" />
                <Trac998 className="trac-998" src="/img/trac--998-1@1x.png" />
            </TracContainer>
        </IconFeatherCopy1>
    );
}

const IconFeatherCopy1 = styled.div`
    height: 15px;
    margin-left: 390px;
    margin-top: 2.48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-width: 15px;

    &.icon-feather-copy.icon-feather-copy-1 {
        margin-left: 201px;
        margin-top: 2.49px;
    }

    &.icon-feather-copy.icon-feather-copy-2 {
        margin-left: 389px;
    }
`;

const TracContainer = styled.div`
    width: 16px;
    height: 16px;
    position: relative;
    margin-top: -0.5px;
`;

const Trac997 = styled.img`
    position: absolute;
    width: 11px;
    height: 11px;
    top: 5px;
    left: 5px;
    object-fit: cover;
`;

const Trac998 = styled.img`
    position: absolute;
    width: 11px;
    height: 11px;
    top: 0;
    left: 0;
    object-fit: cover;
`;

export default IconFeatherCopy;
