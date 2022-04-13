import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto2 from './TradingCrypto2';
import TradingCrypto from './TradingCrypto';
import Abonnement from './components/Abonnement';
import ButtonsBtnTextIcon3 from './components/ButtonsBtnTextIcon3';
import Email from './components/Email';
import Editeur from './components/Editeur';
import styled from 'styled-components';
import {
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './TradingCrypto3.css';

function TradingCrypto3(props: any): any {
    const {
        analytics1,
        analytics2,
        paragraphe1,
        analytics3,
        paragraphe2,
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
        tradingCrypto4Props2,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon3Props,
        email1Props,
        editeur1Props,
        email2Props,
        editeur2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="trading-crypto screen">
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
                        <Abonnement className={tradingCrypto4Props2.className} />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <Analytics>{analytics1}</Analytics>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon3Props.className}>
                                {buttonsBtnTextIcon3Props.children}
                            </ButtonsBtnTextIcon3>
                        </FlexRow1>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre>
                            <Email
                                email={email1Props.email}
                                elodieElodieGmailCom={email1Props.elodieElodieGmailCom}
                                className={email1Props.className}
                            />
                            <Editeur src={editeur1Props.src} />
                            <Paragraphe>{paragraphe1}</Paragraphe>
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle632></Rectangle632>
                            <Titre>
                                <Analytics2>{analytics3}</Analytics2>
                            </Titre>
                            <Email
                                email={email2Props.email}
                                elodieElodieGmailCom={email2Props.elodieElodieGmailCom}
                                className={email2Props.className}
                            />
                            <Editeur src={editeur2Props.src} />
                            <Paragraphe>{paragraphe2}</Paragraphe>
                        </OverlapGroup2>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 1352px;
    display: flex;
    align-items: center;
    min-width: 1566px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 1352px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 57px;
    margin-bottom: 24.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1248px;
`;

const FlexRow1 = styled.div`
    height: 48px;
    position: relative;
    margin-left: 21px;
    display: flex;
    align-items: flex-start;
    min-width: 1182px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 212px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 568px;
    position: relative;
    margin-top: 25px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 550px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Titre = styled.div`
    position: absolute;
    width: 256px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics1 = styled.p`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 230px;
    height: 22px;
    margin-left: 5.47%;
    margin-right: 4.69%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Paragraphe = styled.div`
    ${LatoNormalComet10px}
    position: absolute;
    width: 244px;
    top: 116px;
    left: 39px;
    letter-spacing: 0;
    line-height: 10px;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 568px;
    position: relative;
    margin-top: 39px;
`;

const Analytics2 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 130px;
    height: 22px;
    margin-left: 25%;
    margin-right: 24.22%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default TradingCrypto3;
