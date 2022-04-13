import React from 'react';
import TopNavigationSearch from './TopNavigationSearch';
import UserGroup from './UserGroup';
import styled from 'styled-components';

function TopNavigation(props) {
    const { groupe2, className, topNavigationSearchProps, userGroupProps } = props;

    return (
        <TopNavigation1 className={`top-navigation-1 ${className || ''}`}>
            <Groupe2 className="groupe-2-1" style={{ backgroundImage: `url(${groupe2})` }}></Groupe2>
            <TopNavigationSearch
                color={topNavigationSearchProps.color}
                className={topNavigationSearchProps.className}
            />
            <UserGroup usersAvatarPhoto2StatesProps={userGroupProps.usersAvatarPhoto2StatesProps} />
        </TopNavigation1>
    );
}

const TopNavigation1 = styled.div`
    height: 68px;
    position: relative;
    display: flex;
    padding: 14px 40px;
    justify-content: flex-end;
    align-items: center;
    min-width: 1600px;
    background-color: var(--vulcan);
    box-shadow: 0px 1px 4px #15223214;
`;

const Groupe2 = styled.div`
    width: 113px;
    height: 21px;
    margin-top: 0;
    background-size: cover;
    background-position: 50% 50%;
`;

export default TopNavigation;
