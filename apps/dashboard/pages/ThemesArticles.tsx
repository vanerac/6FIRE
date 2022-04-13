import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto2 from './TradingCrypto2';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import Filtre from '../components/Filtre';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import ButtonsBtnTextIcon6 from '../components/ButtonsBtnTextIcon6';
import Groupe455 from '../components/Groupe455';
import styled from 'styled-components';
import {
    PoppinsMediumMirage10px,
    PoppinsMediumMirage12px,
    PoppinsMediumTundora10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './ThemesArticles.css';
import {
    abonnement4Data,
    articles4Data,
    buttonsBtnTextIcon35Data,
    buttonsBtnTextIcon61Data,
    filtre5Data,
    filtre6Data,
    sidebarMenuItem13Data,
    sidebarMenuItem14Data,
    sidebarMenuItem15Data,
    sidebarMenuItem16Data,
    topNavigation3Data,
    tradingCrypto16Data,
    tradingCrypto17Data,
    tradingCrypto18Data,
    tradingCrypto19Data,
    tradingCrypto22Data,
} from './index';

function ThmesArticles(props: any): any {
    const {
        analytics,
        name1,
        name2,
        name3,
        name4,
        name5,
        name6,
        name7,
        name8,
        name9,
        iconActif,
        name10,
        membre,
        fontawsomePen,
        iconClose,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto2Props,
        tradingCrypto1Props,
        tradingCrypto2Props2,
        tradingCrypto3Props,
        tradingCrypto4Props,
        abonnementProps,
        sidebarMenuItem4Props,
        filtre1Props,
        filtre2Props,
        buttonsBtnTextIcon3Props,
        buttonsBtnTextIcon6Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="themes-articles screen">
                <TopNavigation
                    groupe2={topNavigationProps.groupe2}
                    className={topNavigationProps.className}
                    topNavigationSearchProps={topNavigationProps.topNavigationSearchProps}
                    userGroupProps={topNavigationProps.userGroupProps}
                />
                <FlexRow>
                    <Sidebar>
                        <SidebarMenuItem
                            name={sidebarMenuItem1Props.name}
                            className={sidebarMenuItem1Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem1Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem2Props.name}
                            className={sidebarMenuItem2Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem3Props.name}
                            className={sidebarMenuItem3Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
                        />
                        <Articles
                            className={articlesProps.className}
                            iconsNavigationIcon12StatesProps={articlesProps.iconsNavigationIcon12StatesProps}
                        />
                        <TradingCrypto2
                            fontawsomePen={tradingCrypto2Props.fontawsomePen}
                            name={tradingCrypto2Props.name}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto1Props.iconPencil}
                            name={tradingCrypto1Props.name}
                            className={tradingCrypto1Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto2Props2.iconPencil}
                            name={tradingCrypto2Props2.name}
                            className={tradingCrypto2Props2.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto3Props.iconPencil}
                            name={tradingCrypto3Props.name}
                            className={tradingCrypto3Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto4Props.iconPencil}
                            name={tradingCrypto4Props.name}
                            className={tradingCrypto4Props.className}
                        />
                        <Abonnement className={abonnementProps.className} />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <FlexCol1>
                                <Analytics>{analytics}</Analytics>
                                <Search>
                                    <Name>{name1}</Name>
                                </Search>
                            </FlexCol1>
                            <Filtre name={filtre1Props.name} className={filtre1Props.className} />
                            <Filtre name={filtre2Props.name} className={filtre2Props.className} />
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon3Props.className}>
                                {buttonsBtnTextIcon3Props.children}
                            </ButtonsBtnTextIcon3>
                            <ButtonsBtnTextIcon6 groupe3932Props={buttonsBtnTextIcon6Props.groupe3932Props} />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                                <Name5>{name6}</Name5>
                                <Name6>{name7}</Name6>
                            </GridTable>
                            <Row>
                                <Name7>{name8}</Name7>
                                <Name8>{name9}</Name8>
                                <OverlapGroup>
                                    <IconActif style={{ backgroundImage: `url(${iconActif})` }}></IconActif>
                                </OverlapGroup>
                                <Name9>{name10}</Name9>
                                <Membre style={{ backgroundImage: `url(${membre})` }}></Membre>
                                <FontAwsomepen src={fontawsomePen} />
                                <IconClose src={iconClose} />
                            </Row>
                        </OverlapGroup1>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 829px;
    display: flex;
    align-items: center;
    min-width: 1560px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 829px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-bottom: 47.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 706px;
`;

const FlexRow1 = styled.div`
    height: 122px;
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 1259px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 122px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 17px;
    min-width: 198px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Search = styled.div`
    height: 37px;
    margin-top: 50px;
    display: flex;
    padding: 5.5px 18px;
    align-items: flex-end;
    min-width: 317px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Name = styled.div`
    ${PoppinsMediumMirage10px}
    min-height: 17px;
    min-width: 67px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 570px;
    position: relative;
    margin-top: 15px;
    border-radius: 6px;
`;

const GridTable = styled.div`
    ${PoppinsMediumMirage12px}
    position: absolute;
    height: 17px;
    top: 24px;
    left: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 1194px;
`;

const Name1 = styled.div`
    min-height: 19px;
    margin-bottom: -4.5px;
    min-width: 14px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 51px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 256px;
    margin-bottom: -4.5px;
    min-width: 28px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 126px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 42px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name6 = styled.div`
    min-height: 19px;
    margin-left: 192px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Row = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 13px 30px;
    align-items: center;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name7 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-bottom: 4.5px;
    min-width: 6px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name8 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 156px;
    margin-bottom: 4.5px;
    min-width: 88px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const OverlapGroup = styled.div`
    height: 35px;
    align-self: flex-end;
    margin-left: 219px;
    display: flex;
    padding: 7.4px 7.9px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 35px;
    background-color: var(--tundora);
`;

const IconActif = styled.div`
    width: 19px;
    height: 19px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Name9 = styled.div`
    min-height: 17px;
    margin-left: 143px;
    margin-top: 8px;
    min-width: 120px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 153px;
    margin-bottom: 0;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 209px;
    margin-top: 3px;
    object-fit: cover;
`;

const IconClose = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-top: 3px;
    object-fit: cover;
`;

export default ThmesArticles;
export const thmesArticlesData = {
    analytics: 'Thèmes articles',
    name1: 'Rechercher…',
    name2: 'ID',
    name3: 'Thèmes',
    name4: 'Icon',
    name5: 'Type d’abonnement',
    name6: 'Visible',
    name7: 'Action',
    name8: '1',
    name9: 'Cryptomonnaies',
    iconActif: '/img/groupe-1490@1x.png',
    name10: 'Intermédiaire (99.99€)',
    membre: '/img/fontawsome--check-square--10@1x.png',
    fontawsomePen: '/img/fontawsome--pen--12@1x.png',
    iconClose: '/img/fontawsome--times--10@1x.png',
    topNavigationProps: topNavigation3Data,
    sidebarMenuItem1Props: sidebarMenuItem13Data,
    sidebarMenuItem2Props: sidebarMenuItem14Data,
    sidebarMenuItem3Props: sidebarMenuItem15Data,
    articlesProps: articles4Data,
    tradingCrypto2Props: tradingCrypto22Data,
    tradingCrypto1Props: tradingCrypto16Data,
    tradingCrypto2Props2: tradingCrypto17Data,
    tradingCrypto3Props: tradingCrypto18Data,
    tradingCrypto4Props: tradingCrypto19Data,
    abonnementProps: abonnement4Data,
    sidebarMenuItem4Props: sidebarMenuItem16Data,
    filtre1Props: filtre5Data,
    filtre2Props: filtre6Data,
    buttonsBtnTextIcon3Props: buttonsBtnTextIcon35Data,
    buttonsBtnTextIcon6Props: buttonsBtnTextIcon61Data,
};
