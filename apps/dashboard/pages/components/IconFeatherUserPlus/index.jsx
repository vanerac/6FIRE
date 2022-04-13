import React from 'react';
import styled from 'styled-components';

function IconFeatherUserPlus(props) {
    const { trac463, trac464, trac465, trac466 } = props;

    return (
        <IconFeatherUserPlus1>
            <Trac463 src={trac463} />
            <Trac464 src={trac464} />
            <TracContainer>
                <Trac465 src={trac465} />
                <Trac466 src={trac466} />
            </TracContainer>
        </IconFeatherUserPlus1>
    );
}

const IconFeatherUserPlus1 = styled.div`
    margin-top: 18.2px;
    width: 28.01611328125px;
    height: 25.5px;
    margin-left: 17px;
    position: relative;
`;

const Trac463 = styled.img`
    position: absolute;
    width: 21px;
    height: 11px;
    top: 15px;
    left: -1px;
    object-fit: cover;
`;

const Trac464 = styled.img`
    position: absolute;
    width: 14px;
    height: 14px;
    top: -1px;
    left: 2px;
    object-fit: cover;
`;

const TracContainer = styled.div`
    position: absolute;
    width: 11px;
    height: 11px;
    top: 6px;
    left: 18px;
`;

const Trac465 = styled.img`
    position: absolute;
    width: 2px;
    height: 11px;
    top: 0;
    left: 4px;
    object-fit: cover;
`;

const Trac466 = styled.img`
    position: absolute;
    width: 11px;
    height: 2px;
    top: 4px;
    left: 0;
    object-fit: cover;
`;

export default IconFeatherUserPlus;
