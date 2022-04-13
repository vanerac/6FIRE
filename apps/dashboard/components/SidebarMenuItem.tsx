import React from 'react';
import Link from 'next/link';
import IconsNavigationIcon12States from './IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsMediumMirage14px } from '../styledMixins';

function SidebarMenuItem(props) {
    const { name, className, iconsNavigationIcon12StatesProps } = props;

    return (
        <SidebarMenuItem1 className={`sidebar-menu-item ${className || ''}`}>
            <IconsNavigationIcon12States
                src={iconsNavigationIcon12StatesProps.src}
                className={iconsNavigationIcon12StatesProps.className}
            />
            <Name className="name">{name}</Name>
        </SidebarMenuItem1>
    );
}

const SidebarMenuItem1 = styled.div`
    height: 52px;
    position: relative;
    margin-top: 19px;
    display: flex;
    padding: 11px 20px;
    align-items: center;
    min-width: 230px;

    &.sidebar-menu-item.customers-1 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles {
        padding: 11px 23.9px;
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.home {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-1 {
        padding: 11px 23.9px;
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-1 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-1 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-2 {
        padding: 11px 23.9px;
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-2 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.home-2 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-2 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-3 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-3 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.home-3 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-3 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-4 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-4 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-4 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-4 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-5 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-5 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-5 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-5 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-6 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-6 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-6 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-6 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-7 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-7 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-7 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-7 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-8 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-8 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-8 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-8 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-9 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-9 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-9 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-9 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-10 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-10 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-10 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-10 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-11 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-11 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-11 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-11 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-12 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.home-12 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-12 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-12 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-13 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-13 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-13 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-13 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.home-14 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-14 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-14 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-14 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.home-15 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-15 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-15 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-15 {
        margin-top: 208px;
    }

    &.sidebar-menu-item.home-16 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-16 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-16 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-16 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-17 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-17 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-17 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-17 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-18 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-18 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-18 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-18 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-19 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-19 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-19 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-19 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-20 {
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-20 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-20 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-20 {
        margin-top: unset;
    }

    &.sidebar-menu-item.home-21 {
        cursor: pointer;
        margin-top: unset;
    }

    &.sidebar-menu-item.customers-21 {
        margin-top: unset;
    }

    &.sidebar-menu-item.thmes-articles-21 {
        padding: 11px 23.9px;
        margin-top: unset;
    }

    &.sidebar-menu-item.settings-21 {
        margin-top: unset;
    }
`;

const Name = styled.div`
    ${PoppinsMediumMirage14px}
    min-height: 22px;
    align-self: flex-end;
    margin-left: 20px;
    min-width: 44px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-1  & {
        min-width: 82px;
    }
`;

const Name2 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name3 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings  & {
        min-width: 60px;
    }
`;

const Name4 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-1  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name5 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-1  & {
        min-width: 60px;
    }
`;

const Name6 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-2  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name7 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-2  & {
        min-width: 60px;
    }
`;

const Name8 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-2  & {
        min-width: 82px;
    }
`;

const Name9 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-3  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name10 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-3  & {
        min-width: 60px;
    }
`;

const Name11 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-3  & {
        min-width: 82px;
    }
`;

const Name12 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-4  & {
        min-width: 60px;
    }
`;

const Name13 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-4  & {
        min-width: 82px;
    }
`;

const Name14 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-4  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name15 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-5  & {
        min-width: 60px;
    }
`;

const Name16 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-5  & {
        min-width: 82px;
    }
`;

const Name17 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-5  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name18 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-6  & {
        min-width: 60px;
    }
`;

const Name19 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-6  & {
        min-width: 82px;
    }
`;

const Name20 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-6  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name21 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-7  & {
        min-width: 60px;
    }
`;

const Name22 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-7  & {
        min-width: 82px;
    }
`;

const Name23 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-7  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name24 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-8  & {
        min-width: 60px;
    }
`;

const Name25 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-8  & {
        min-width: 82px;
    }
`;

const Name26 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-8  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name27 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-9  & {
        min-width: 60px;
    }
`;

const Name28 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-9  & {
        min-width: 82px;
    }
`;

const Name29 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-9  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name30 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-10  & {
        min-width: 60px;
    }
`;

const Name31 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-10  & {
        min-width: 82px;
    }
`;

const Name32 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-10  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name33 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-11  & {
        min-width: 60px;
    }
`;

const Name34 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-11  & {
        min-width: 82px;
    }
`;

const Name35 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-11  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name36 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-12  & {
        min-width: 60px;
    }
`;

const Name37 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-12  & {
        min-width: 82px;
    }
`;

const Name38 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-12  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name39 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-13  & {
        min-width: 60px;
    }
`;

const Name40 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-13  & {
        min-width: 82px;
    }
`;

const Name41 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-13  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name42 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-14  & {
        min-width: 82px;
    }
`;

const Name43 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-14  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name44 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-14  & {
        min-width: 60px;
    }
`;

const Name45 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-15  & {
        min-width: 82px;
    }
`;

const Name46 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-15  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name47 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-15  & {
        min-width: 60px;
    }
`;

const Name48 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-16  & {
        min-width: 82px;
    }
`;

const Name49 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-16  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name50 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-16  & {
        min-width: 60px;
    }
`;

const Name51 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-17  & {
        min-width: 82px;
    }
`;

const Name52 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-17  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name53 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-17  & {
        min-width: 60px;
    }
`;

const Name54 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-18  & {
        min-width: 82px;
    }
`;

const Name55 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-18  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name56 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-18  & {
        min-width: 60px;
    }
`;

const Name57 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-19  & {
        min-width: 82px;
    }
`;

const Name58 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-19  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name59 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-19  & {
        min-width: 60px;
    }
`;

const Name60 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-20  & {
        min-width: 82px;
    }
`;

const Name61 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-20  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name62 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-20  & {
        min-width: 60px;
    }
`;

const Name63 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.customers-21  & {
        min-width: 82px;
    }
`;

const Name64 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.thmes-articles-21  & {
        margin-left: 24px;
        min-width: 115px;
    }
`;

const Name65 = styled.div`
    ${PoppinsMediumMirage14px}

    .sidebar-menu-item.settings-21  & {
        min-width: 60px;
    }
`;

export default SidebarMenuItem;
