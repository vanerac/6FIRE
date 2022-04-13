import React from 'react';
import IconsNavigationIcon12States from '../IconsNavigationIcon12States';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Articles2(props) {
    const { className, iconsNavigationIcon12StatesProps } = props;

    return (
        <Articles className={`articles-20 ${className || ''}`}>
            <OverlapGroup2 className="overlap-group2-2">
                <Line className="line-2"></Line>
                <IconsNavigationIcon12States
                    src={iconsNavigationIcon12StatesProps.src}
                    className={iconsNavigationIcon12StatesProps.className}
                />
                <Name className="name-44">Articles</Name>
                <IconIonicIosArrowDown
                    className="icon-ionic-ios-arrow-down-3"
                    src="/img/icon-ionic-ios-arrow-down-10@1x.png"
                />
            </OverlapGroup2>
            <OverlapGroup className="overlap-group-7">
                <Name1 className="name-45">Créer article</Name1>
            </OverlapGroup>
            <OverlapGroup className="overlap-group1-8">
                <Name2 className="name-46">Créer article entreprise</Name2>
            </OverlapGroup>
            <OverlapGroup3 className="overlap-group3-1">
                <Name3 className="name-47">Historique articles</Name3>
            </OverlapGroup3>
        </Articles>
    );
}

const Articles = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 208px;
`;

const OverlapGroup2 = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 230px;
    background-image: url(/img/frame-10@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Line = styled.div`
    width: 4px;
    height: 52px;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Name = styled.div`
    min-height: 22px;
    margin-left: 20px;
    margin-top: 8px;
    min-width: 55px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const IconIonicIosArrowDown = styled.img`
    width: 12px;
    height: 7px;
    margin-left: 72px;
    margin-bottom: 0;
    object-fit: cover;
`;

const OverlapGroup = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-color: var(--blue-ribbon-2);
`;

const Name1 = styled.div`
    min-height: 22px;
    min-width: 90px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 22px;
    min-width: 167px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
    height: 52px;
    display: flex;
    padding: 11px 20px;
    align-items: flex-end;
    min-width: 230px;
    background-image: url(/img/frame-11@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Name3 = styled.div`
    min-height: 22px;
    min-width: 131px;
    letter-spacing: 0.1px;
    line-height: 14px;
    text-decoration: underline;
    white-space: nowrap;
`;

const Name4 = styled.div`
    .articles-20.articles-21 & {
        text-decoration: underline;
    }
`;

const Name5 = styled.div`
    .articles-20.articles-21 & {
        text-decoration: unset;
    }
`;

const Name6 = styled.div`
    .articles-20.articles-22 & {
        text-decoration: underline;
    }
`;

const Name7 = styled.div`
    .articles-20.articles-22 & {
        text-decoration: unset;
    }
`;

export default Articles2;
