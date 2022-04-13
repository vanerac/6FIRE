import React from 'react';
import TopNavigation2 from '../components/TopNavigation2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles2 from '../components/Articles2';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import Image1 from '../components/Image1';
import Filtre from '../components/Filtre';
import IDFixe from '../components/IDFixe';
import Titre3 from '../components/Titre3';
import Email from '../components/Email';
import Titre4 from '../components/Titre4';
import Titre5 from '../components/Titre5';
import BoutonPourSupprimer from '../components/BoutonPourSupprimer';
import styled from 'styled-components';
import { Border1pxSilver, PoppinsSemiboldSemiBoldMirage24px, PoppinsSemiboldSemiBoldWhite14px } from '../styledMixins';
import '../styles/ArticlesCrerUnArticle.css';
import {
    abonnement7Data,
    articles23Data,
    buttonsBtnTextIcon310Data,
    buttonsBtnTextIcon311Data,
    buttonsBtnTextIcon38Data,
    buttonsBtnTextIcon39Data,
    email5Data,
    filtre10Data,
    filtre11Data,
    iDFixe11Data,
    iDFixe12Data,
    image11Data,
    image12Data,
    sidebarMenuItem28Data,
    sidebarMenuItem29Data,
    sidebarMenuItem30Data,
    sidebarMenuItem31Data,
    topNavigation23Data,
    tradingCrypto31Data,
    tradingCrypto32Data,
    tradingCrypto33Data,
    tradingCrypto34Data,
    tradingCrypto35Data,
} from './index';

function ArticlesCrerUnArticle(props: any): any {
    const {
        analytics1,
        analytics2,
        notesDetailsTextEditor,
        analytics3,
        analytics4,
        topNavigation2Props,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articles2Props,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        tradingCrypto5Props2,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon31Props,
        buttonsBtnTextIcon32Props,
        image11Props,
        filtre1Props,
        iDFixe1Props,
        image12Props,
        emailProps,
        buttonsBtnTextIcon33Props,
        iDFixe2Props,
        buttonsBtnTextIcon34Props,
        filtre2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="articles-creer-un-article screen">
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
                        <SidebarMenuItem
                            name={sidebarMenuItem3Props.name}
                            className={sidebarMenuItem3Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
                        />
                        <Articles2
                            className={articles2Props.className}
                            iconsNavigationIcon12StatesProps={articles2Props.iconsNavigationIcon12StatesProps}
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
                        <Abonnement className={tradingCrypto5Props2.className} />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <Analytics>{analytics1}</Analytics>
                        <Action>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon31Props.className}>
                                {buttonsBtnTextIcon31Props.children}
                            </ButtonsBtnTextIcon3>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon32Props.className}>
                                {buttonsBtnTextIcon32Props.children}
                            </ButtonsBtnTextIcon3>
                        </Action>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre>
                            <Image1
                                imagePrsentation={image11Props.imagePrsentation}
                                buttonsBtnTextIcon5Props={image11Props.buttonsBtnTextIcon5Props}
                            />
                            <Filtre name={filtre1Props.name} className={filtre1Props.className} />
                            <IDFixe
                                idUser={iDFixe1Props.idUser}
                                number={iDFixe1Props.number}
                                ligne6={iDFixe1Props.ligne6}
                                className={iDFixe1Props.className}
                            />
                            <Image1
                                imagePrsentation={image12Props.imagePrsentation}
                                className={image12Props.className}
                                buttonsBtnTextIcon5Props={image12Props.buttonsBtnTextIcon5Props}
                            />
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre3 />
                            <Email
                                email={emailProps.email}
                                elodieElodieGmailCom={emailProps.elodieElodieGmailCom}
                                className={emailProps.className}
                            />
                            <BoutonBascule>
                                <Titre4 />
                                <Titre5 />
                            </BoutonBascule>
                            <Rectangle16882></Rectangle16882>
                            <NotesDetailsTextEditor src={notesDetailsTextEditor} />
                        </OverlapGroup2>
                        <OverlapGroup3>
                            <Rectangle6322></Rectangle6322>
                            <Titre>
                                <Analytics2>{analytics3}</Analytics2>
                            </Titre>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon33Props.className}>
                                {buttonsBtnTextIcon33Props.children}
                            </ButtonsBtnTextIcon3>
                            <IDFixe
                                idUser={iDFixe2Props.idUser}
                                number={iDFixe2Props.number}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                        </OverlapGroup3>
                        <OverlapGroup4>
                            <Rectangle6323></Rectangle6323>
                            <Titre>
                                <Analytics3>{analytics4}</Analytics3>
                            </Titre>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon34Props.className}>
                                {buttonsBtnTextIcon34Props.children}
                            </ButtonsBtnTextIcon3>
                            <Filtre name={filtre2Props.name} className={filtre2Props.className} />
                            <BoutonPourSupprimer />
                        </OverlapGroup4>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 1817px;
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
    min-height: 1817px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 1648px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 19px;
    min-width: 192px;
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
    margin-top: 18px;
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

const Titre = styled.div`
    position: absolute;
    width: 182px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics1 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 56px;
    height: 22px;
    margin-left: 35.16%;
    margin-right: 34.07%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 604px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle6321 = styled.div`
    position: absolute;
    width: 1259px;
    height: 586px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const BoutonBascule = styled.div`
    position: absolute;
    width: 232px;
    height: 28px;
    top: 124px;
    left: 39px;
    display: flex;
    justify-content: space-between;
`;

const Rectangle16882 = styled.div`
    ${Border1pxSilver}
    position: absolute;
    width: 917px;
    height: 402px;
    top: 172px;
    left: 41px;
    background-color: var(--white);
`;

const NotesDetailsTextEditor = styled.img`
    position: absolute;
    width: 605px;
    height: 39px;
    top: 175px;
    left: 51px;
    object-fit: cover;
`;

const OverlapGroup3 = styled.div`
    width: 1259px;
    height: 140px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle6322 = styled.div`
    position: absolute;
    width: 1259px;
    height: 122px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Analytics2 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 60px;
    height: 22px;
    margin-left: 34.07%;
    margin-right: 32.97%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
    width: 1259px;
    height: 358px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle6323 = styled.div`
    position: absolute;
    width: 1259px;
    height: 340px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Analytics3 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 126px;
    height: 22px;
    margin-left: 15.93%;
    margin-right: 14.84%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default ArticlesCrerUnArticle;
export const articlesCrerUnArticleData = {
    analytics1: 'Créer un article',
    analytics2: 'Articles',
    notesDetailsTextEditor: '/img/notes--details--text-editor@1x.png',
    analytics3: 'Podcast',
    analytics4: 'Articles suggérés',
    topNavigation2Props: topNavigation23Data,
    sidebarMenuItem1Props: sidebarMenuItem28Data,
    sidebarMenuItem2Props: sidebarMenuItem29Data,
    sidebarMenuItem3Props: sidebarMenuItem30Data,
    articles2Props: articles23Data,
    tradingCrypto1Props: tradingCrypto31Data,
    tradingCrypto2Props: tradingCrypto32Data,
    tradingCrypto3Props: tradingCrypto33Data,
    tradingCrypto4Props: tradingCrypto34Data,
    tradingCrypto5Props: tradingCrypto35Data,
    tradingCrypto5Props2: abonnement7Data,
    sidebarMenuItem4Props: sidebarMenuItem31Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon38Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon39Data,
    image11Props: image11Data,
    filtre1Props: filtre10Data,
    iDFixe1Props: iDFixe11Data,
    image12Props: image12Data,
    emailProps: email5Data,
    buttonsBtnTextIcon33Props: buttonsBtnTextIcon310Data,
    iDFixe2Props: iDFixe12Data,
    buttonsBtnTextIcon34Props: buttonsBtnTextIcon311Data,
    filtre2Props: filtre11Data,
};
