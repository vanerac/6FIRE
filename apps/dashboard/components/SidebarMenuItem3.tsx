import React from 'react';
import IconsNavigationIcon12States from './IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsMediumVulcan14px } from '../styledMixins';

function SidebarMenuItem3(props) {
    const { name, iconsNavigationIcon12StatesProps } = props;

    return (
        <SidebarMenuItem>
            <IconsNavigationIcon12States
                src={iconsNavigationIcon12StatesProps.src}
                className={iconsNavigationIcon12StatesProps.className}
            />
            <Name>{name}</Name>
        </SidebarMenuItem>
    );
}

const SidebarMenuItem = styled.div`
    height: 52px;
    position: relative;
    margin-top: 15px;
    display: flex;
    padding: 11px 20px;
    align-items: center;
    min-width: 230px;
    background-color: var(--blue-ribbon-2);
`;

const Name = styled.div`
    ${PoppinsMediumVulcan14px}
    min-height: 22px;
    align-self: flex-end;
    margin-left: 20px;
    min-width: 44px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

export default SidebarMenuItem3;
