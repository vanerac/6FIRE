import React from 'react';
import styled from 'styled-components';

function UsersAvatarPhoto2States2(props) {
    const { children } = props;

    return (
        <UsersAvatarPhoto2States>
            <AA>{children}</AA>
        </UsersAvatarPhoto2States>
    );
}

const UsersAvatarPhoto2States = styled.div`
    height: 42px;
    margin-left: 16px;
    display: flex;
    padding: 3.5px 7.5px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 42px;
    background-color: var(--blue-jeans);
    border-radius: 21px;
`;

const AA = styled.div`
    min-height: 25px;
    min-width: 24px;
    font-family: var(--font-family-poppins);
    font-weight: 500;
    color: var(--white);
    font-size: var(--font-size-xl);
    text-align: center;
    letter-spacing: 0;
    line-height: 16px;
    white-space: nowrap;
`;

export default UsersAvatarPhoto2States2;
