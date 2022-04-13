import React from 'react';
import UsersAvatarPhoto2States from './UsersAvatarPhoto2States';
import IconsNavigationIcon12States from './IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px, PoppinsMediumVulcan14px } from '../styledMixins';

function WidgetsCustomerRow(props) {
    const { customerId00222, isabellaMoran, usersAvatarPhoto2StatesProps, iconsNavigationIcon12StatesProps } = props;

    return (
        <WidgetsCustomerRow1>
            <UsersAvatarPhoto2States image={usersAvatarPhoto2StatesProps.image} />
            <OverlapGroup1>
                <CustomerID00222>{customerId00222}</CustomerID00222>
                <IsabellaMoran>{isabellaMoran}</IsabellaMoran>
            </OverlapGroup1>
            <IconsNavigationIcon12States
                src={iconsNavigationIcon12StatesProps.src}
                className={iconsNavigationIcon12StatesProps.className}
            />
        </WidgetsCustomerRow1>
    );
}

const WidgetsCustomerRow1 = styled.div`
    height: 70px;
    position: relative;
    margin-top: 12px;
    display: flex;
    padding: 0 30px;
    justify-content: flex-end;
    align-items: center;
    min-width: 410px;
`;

const OverlapGroup1 = styled.div`
    width: 141px;
    height: 36px;
    position: relative;
    margin-left: 14px;
    margin-top: 3.5px;
`;

const CustomerID00222 = styled.div`
    ${PoppinsNormalShadowBlue12px}
    position: absolute;
    top: 18px;
    left: 0;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const IsabellaMoran = styled.div`
    ${PoppinsMediumVulcan14px}
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

export default WidgetsCustomerRow;
