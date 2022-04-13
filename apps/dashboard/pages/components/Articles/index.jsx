import React from 'react';
import { Link } from 'react-router-dom';
import IconsNavigationIcon12States from '../IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsMediumMirage14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Articles(props) {
    const { className, iconsNavigationIcon12StatesProps } = props;

    return (
        <Link to="/articles-historique-articles">
            <Articles1 className={`articles ${className || ''}`}>
                <IconsNavigationIcon12States
                    src={iconsNavigationIcon12StatesProps.src}
                    className={iconsNavigationIcon12StatesProps.className}
                />
                <Name className="name-7">Articles</Name>
                <IconIonicIosArrowDown
                    className="icon-ionic-ios-arrow-down"
                    src="/img/icon-ionic-ios-arrow-down-10@1x.png"
                />
            </Articles1>
        </Link>
    );
}

const Articles1 = styled.div`
    height: 52px;
    position: relative;
    display: flex;
    padding: 11px 20px;
    align-items: center;
    min-width: 230px;
    cursor: pointer;

    &.articles.articles-1 {
        cursor: unset;
    }

    &.articles.articles-3 {
        cursor: unset;
    }

    &.articles.articles-4 {
        cursor: unset;
    }

    &.articles.articles-5 {
        cursor: unset;
    }

    &.articles.articles-6 {
        cursor: unset;
    }

    &.articles.articles-7 {
        cursor: unset;
    }

    &.articles.articles-8 {
        cursor: unset;
    }

    &.articles.articles-9 {
        cursor: unset;
    }

    &.articles.articles-10 {
        cursor: unset;
    }

    &.articles.articles-11 {
        cursor: unset;
    }

    &.articles.articles-12 {
        cursor: unset;
    }

    &.articles.articles-13 {
        cursor: unset;
    }

    &.articles.articles-14 {
        cursor: unset;
    }

    &.articles.articles-15 {
        cursor: unset;
    }

    &.articles.articles-16 {
        cursor: unset;
    }

    &.articles.articles-17 {
        cursor: unset;
    }

    &.articles.articles-18 {
        cursor: unset;
    }

    &.articles.articles-19 {
        cursor: unset;
    }
`;

const Name = styled.div`
    ${PoppinsMediumMirage14px}
    min-height: 22px;
    align-self: flex-end;
    margin-left: 20px;
    min-width: 55px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const IconIonicIosArrowDown = styled.img`
    width: 12px;
    height: 7px;
    margin-left: 72px;
    margin-top: 0;
    object-fit: cover;
`;

export default Articles;
