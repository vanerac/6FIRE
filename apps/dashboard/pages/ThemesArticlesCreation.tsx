import React from 'react';
import TopNavigation2 from '../components/TopNavigation2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import SidebarMenuItem2 from '../components/SidebarMenuItem2';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import Titre2 from '../components/Titre2';
import Email from '../components/Email';
import Filtre from '../components/Filtre';
import ButtonsBtnTextIcon5 from '../components/ButtonsBtnTextIcon5';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './ThemesArticlesCreation.css';

function ThmesArticlesCration(props: any): any {
    const {
        analytics,
        slectionnerTypesDabonnements,
        icon,
        image1,
        topNavigation2Props,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem2Props2,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        abonnementProps,
        sidebarMenuItem3Props,
        buttonsBtnTextIcon31Props,
        buttonsBtnTextIcon32Props,
        titre2Props,
        emailProps,
        filtreProps,
        buttonsBtnTextIcon5Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="themes-articles-creation screen">
                <TopNavigation2
                    groupe2={topNavigation2Props.groupe2}
                    className={topNavigation2Props.className}
                    topNavigationSearch2Props={topNavigation2Props.topNavigationSearch2Props}
                    userGroupProps={topNavigation2Props.userGroupProps}
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
                        <SidebarMenuItem2
                            name={sidebarMenuItem2Props2.name}
                            className={sidebarMenuItem2Props2.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props2.iconsNavigationIcon12StatesProps}
                        />
                        <Articles
                            className={articlesProps.className}
                            iconsNavigationIcon12StatesProps={articlesProps.iconsNavigationIcon12StatesProps}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto1Props.iconPencil}
                            name={tradingCrypto1Props.name}
                            className={tradingCrypto1Props.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto2Props.iconPencil}
                            name={tradingCrypto2Props.name}
                            className={tradingCrypto2Props.className}
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
                        <TradingCrypto
                            iconPencil={tradingCrypto5Props.iconPencil}
                            name={tradingCrypto5Props.name}
                            className={tradingCrypto5Props.className}
                        />
                        <Abonnement className={abonnementProps.className} />
                        <SidebarMenuItem
                            name={sidebarMenuItem3Props.name}
                            className={sidebarMenuItem3Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <Analytics>{analytics}</Analytics>
                            <Action>
                                <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon31Props.className}>
                                    {buttonsBtnTextIcon31Props.children}
                                </ButtonsBtnTextIcon3>
                                <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon32Props.className}>
                                    {buttonsBtnTextIcon32Props.children}
                                </ButtonsBtnTextIcon3>
                            </Action>
                        </FlexRow1>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre2>{titre2Props.children}</Titre2>
                            <Email email={emailProps.email} elodieElodieGmailCom={emailProps.elodieElodieGmailCom} />
                            <SelectAbonnement>
                                <SlectionnerTypesDabonnements>
                                    {slectionnerTypesDabonnements}
                                </SlectionnerTypesDabonnements>
                                <Filtre name={filtreProps.name} className={filtreProps.className} />
                            </SelectAbonnement>
                            <Icon>
                                <Icon1>{icon}</Icon1>
                                <FlexRow2>
                                    <Image1 src={image1} />
                                    <ButtonsBtnTextIcon5 className={buttonsBtnTextIcon5Props.className}>
                                        {buttonsBtnTextIcon5Props.children}
                                    </ButtonsBtnTextIcon5>
                                </FlexRow2>
                            </Icon>
                        </OverlapGroup1>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 828px;
    display: flex;
    align-items: flex-start;
    min-width: 1560px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 828px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-top: 42.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 408px;
`;

const FlexRow1 = styled.div`
    height: 66px;
    display: flex;
    align-items: flex-start;
    min-width: 1259px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 194px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Action = styled.div`
    width: 360px;
    height: 32px;
    position: relative;
    align-self: flex-end;
    margin-left: 705px;
    display: flex;
    justify-content: space-between;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 301px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 283px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const SelectAbonnement = styled.div`
    position: absolute;
    width: 244px;
    height: 55px;
    top: 53px;
    left: 319px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SlectionnerTypesDabonnements = styled.div`
    ${LatoNormalComet10px}
    margin-right: -2px;
    flex: 1;
    max-height: 14px;
    height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Icon = styled.div`
    position: absolute;
    width: 283px;
    top: 127px;
    left: 19px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 141px;
`;

const Icon1 = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow2 = styled.div`
    position: relative;
    margin-top: 1px;
    margin-left: -9px;
    display: flex;
    align-items: center;
    min-width: 292px;
`;

const Image1 = styled.img`
    width: 178px;
    height: 138px;
    object-fit: cover;
`;

export default ThmesArticlesCration;
