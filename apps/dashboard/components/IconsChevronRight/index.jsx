import React from 'react';
import styled from 'styled-components';

function IconsChevronRight(props) {
    const { iconsChevronRight, trac407 } = props;

    return (
        <IconsChevronRight1 style={{ backgroundImage: `url(${iconsChevronRight})` }}>
            <Trac407 src={trac407} />
        </IconsChevronRight1>
    );
}

const IconsChevronRight1 = styled.div`
    margin-top: 2px;
    margin-right: 4px;
    margin-bottom: 2px;
    display: flex;
    padding: 0 4.6px;
    align-items: center;
    min-width: 16px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Trac407 = styled.img`
    width: 6px;
    height: 11px;
    object-fit: cover;
`;

export default IconsChevronRight;
