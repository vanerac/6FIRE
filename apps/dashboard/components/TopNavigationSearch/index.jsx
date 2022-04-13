import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalComet14px } from '../../styledMixins';

function TopNavigationSearch(props) {
    const { color, className } = props;

    return (
        <TopNavigationSearch1 className={`top-navigation-search ${className || ''}`}>
            <X00General01Icons02Common01Settings className="x00-general-01-icons-7">
                <Color className="color-1" src={color} />
            </X00General01Icons02Common01Settings>
            <Search className="search">Search...</Search>
        </TopNavigationSearch1>
    );
}

const TopNavigationSearch1 = styled.div`
    width: 92px;
    height: 24px;
    margin-top: 27px;
    display: flex;
    justify-content: space-between;

    &.top-navigation-search.top-navigation-search-1 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-2 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-3 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-4 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-5 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-6 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-7 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-8 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-9 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-10 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-11 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-12 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-13 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-14 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-15 {
        margin-left: 138px;
        margin-top: unset;
    }

    &.top-navigation-search.top-navigation-search-16 {
        margin-left: 138px;
        margin-top: unset;
    }
`;

const X00General01Icons02Common01Settings = styled.div`
    width: 24px;
    display: flex;
`;

const Color = styled.img`
    margin-top: 3px;
    margin-left: 3px;
    width: 16.9996337890625px;
    margin-bottom: 4px;
    object-fit: cover;
`;

const Search = styled.div`
    ${PoppinsNormalComet14px}
    margin-top: 3px;
    margin-bottom: -1px;
    width: 60px;
    margin-right: -2px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Color1 = styled.img`
    .top-navigation-search.top-navigation-search-5 & {
        width: 16.99951171875px;
    }
`;

const Color2 = styled.img`
    .top-navigation-search.top-navigation-search-13 & {
        width: 16.99951171875px;
    }
`;

export default TopNavigationSearch;
