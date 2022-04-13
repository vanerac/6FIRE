import React from 'react';
import IconsNavigationIcon12States from '../IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function SidebarMenuItem2(props) {
    const { name, className, iconsNavigationIcon12StatesProps } = props;

    return (
        <SidebarMenuItem className={`sidebar-menu-item-1 ${className || ''}`}>
            <Line className="line"></Line>
            <IconsNavigationIcon12States
                src={iconsNavigationIcon12StatesProps.src}
                className={iconsNavigationIcon12StatesProps.className}
            />
            <Name className="name-1">{name}</Name>
        </SidebarMenuItem>
    );
}

const SidebarMenuItem = styled.div`
    position: relative;
    margin-top: 15px;
    display: flex;
    align-items: center;
    min-width: 230px;
    background-image: url(/img/frame-12@1x.png);
    background-size: cover;
    background-position: 50% 50%;

    &.sidebar-menu-item-1.home-22 {
        margin-top: unset;
    }

    &.sidebar-menu-item-1.customers-22 {
        margin-top: unset;
    }

    &.sidebar-menu-item-1.customers-23 {
        margin-top: unset;
    }

    &.sidebar-menu-item-1.thmes-articles-22 {
        margin-top: unset;
    }

    &.sidebar-menu-item-1.settings-22 {
        margin-top: unset;
        background-image: unset;
    }
`;

const Line = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Name = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    min-height: 22px;
    margin-left: 20px;
    margin-top: 8px;
    min-width: 44px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .sidebar-menu-item-1.customers-22  & {
        min-width: 82px;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .sidebar-menu-item-1.customers-23  & {
        min-width: 82px;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .sidebar-menu-item-1.thmes-articles-22  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumBlueRibbon14px}

    .sidebar-menu-item-1.settings-22  & {
        min-width: 60px;
    }
`;

export default SidebarMenuItem2;
