import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement3 from '../components/Abonnement3';
import ButtonsBtnTextIcon4 from '../components/ButtonsBtnTextIcon4';
import Titre from '../components/Titre';
import IDFixe from '../components/IDFixe';
import Type from '../components/Type';
import Filtre2 from '../components/Filtre2';
import BestSeller from '../components/BestSeller';
import PriodeDessai from '../components/PriodeDessai';
import Titre6 from '../components/Titre6';
import PlateformeDePaiement from '../components/PlateformeDePaiement';
import Titre7 from '../components/Titre7';
import Lignes1 from '../components/Lignes1';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import '../styles/AbonnementCrerUnAbonnementpriodeDes.css';
import {
    abonnement32Data,
    articles15Data,
    bestSeller3Data,
    bestSeller4Data,
    buttonsBtnTextIcon45Data,
    iDFixe20Data,
    iDFixe21Data,
    iDFixe27Data,
    iDFixe28Data,
    iDFixe29Data,
    priodeDessaiData,
    sidebarMenuItem71Data,
    sidebarMenuItem72Data,
    sidebarMenuItem73Data,
    sidebarMenuItem74Data,
    titre8Data,
    topNavigation13Data,
    tradingCrypto81Data,
    tradingCrypto82Data,
    tradingCrypto83Data,
    tradingCrypto84Data,
    tradingCrypto85Data,
    type2Data,
    type3Data,
} from './index';

function AbonnementCrerUnAbonnementpriodeDes(props: any): any {
    const {
        analytics,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        abonnement3Props,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon4Props,
        titreProps,
        iDFixe1Props,
        iDFixe2Props,
        iDFixe3Props,
        type1Props,
        bestSeller1Props,
        bestSeller2Props,
        priodeDessaiProps,
        iDFixe4Props,
        iDFixe5Props,
        type2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-creer-un-abonnement-periode-dessai screen">
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
                        <Abonnement3
                            overlapGroup={abonnement3Props.overlapGroup}
                            iconMaterialPayment={abonnement3Props.iconMaterialPayment}
                            name={abonnement3Props.name}
                            gestionAbonnements1Props={abonnement3Props.gestionAbonnements1Props}
                            gestionAbonnements2Props={abonnement3Props.gestionAbonnements2Props}
                            essaiGratuit1Props={abonnement3Props.essaiGratuit1Props}
                            essaiGratuit2Props={abonnement3Props.essaiGratuit2Props}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <Analytics>{analytics}</Analytics>
                            <ButtonsBtnTextIcon4
                                className={buttonsBtnTextIcon4Props.className}
                                groupe393Props={buttonsBtnTextIcon4Props.groupe393Props}
                            />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre className={titreProps.className}>{titreProps.children}</Titre>
                            <IDFixe
                                idUser={iDFixe1Props.idUser}
                                number={iDFixe1Props.number}
                                ligne6={iDFixe1Props.ligne6}
                                className={iDFixe1Props.className}
                            />
                            <IDFixe
                                idUser={iDFixe2Props.idUser}
                                number={iDFixe2Props.number}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                            <IDFixe
                                idUser={iDFixe3Props.idUser}
                                number={iDFixe3Props.number}
                                ligne6={iDFixe3Props.ligne6}
                                className={iDFixe3Props.className}
                            />
                            <Type type={type1Props.type} mensuel={type1Props.mensuel} />
                            <Filtre2 />
                            <BestSeller>{bestSeller1Props.children}</BestSeller>
                            <BestSeller className={bestSeller2Props.className}>{bestSeller2Props.children}</BestSeller>
                            <PriodeDessai on={priodeDessaiProps.on} priodeDessai={priodeDessaiProps.priodeDessai} />
                            <IDFixe
                                idUser={iDFixe4Props.idUser}
                                number={iDFixe4Props.number}
                                ligne6={iDFixe4Props.ligne6}
                                className={iDFixe4Props.className}
                            />
                            <IDFixe
                                idUser={iDFixe5Props.idUser}
                                number={iDFixe5Props.number}
                                ligne6={iDFixe5Props.ligne6}
                                className={iDFixe5Props.className}
                            />
                            <Type
                                type={type2Props.type}
                                mensuel={type2Props.mensuel}
                                className={type2Props.className}
                            />
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre6 />
                            <PlateformeDePaiement />
                            <Filtre2 />
                        </OverlapGroup2>
                        <OverlapGroup3>
                            <Rectangle6321></Rectangle6321>
                            <Titre7 />
                            <Lignes1 />
                            <Filtre2 />
                        </OverlapGroup3>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 933px;
    display: flex;
    align-items: flex-start;
    min-width: 1562px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 933px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 53px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 702px;
`;

const FlexRow1 = styled.div`
    height: 50px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 1239px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 276px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 281px;
    position: relative;
    margin-top: 15px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 263px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 137px;
    position: relative;
    margin-top: 48px;
`;

const Rectangle6321 = styled.div`
    position: absolute;
    width: 1259px;
    height: 119px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const OverlapGroup3 = styled.div`
    width: 1259px;
    height: 137px;
    position: relative;
    margin-top: 34px;
`;

export default AbonnementCrerUnAbonnementpriodeDes;
export const abonnementCrerUnAbonnementpriodeDesData = {
    analytics: 'Gestion Abonnements',
    topNavigationProps: topNavigation13Data,
    sidebarMenuItem1Props: sidebarMenuItem71Data,
    sidebarMenuItem2Props: sidebarMenuItem72Data,
    sidebarMenuItem3Props: sidebarMenuItem73Data,
    articlesProps: articles15Data,
    tradingCrypto1Props: tradingCrypto81Data,
    tradingCrypto2Props: tradingCrypto82Data,
    tradingCrypto3Props: tradingCrypto83Data,
    tradingCrypto4Props: tradingCrypto84Data,
    tradingCrypto5Props: tradingCrypto85Data,
    abonnement3Props: abonnement32Data,
    sidebarMenuItem4Props: sidebarMenuItem74Data,
    buttonsBtnTextIcon4Props: buttonsBtnTextIcon45Data,
    titreProps: titre8Data,
    iDFixe1Props: iDFixe20Data,
    iDFixe2Props: iDFixe21Data,
    iDFixe3Props: iDFixe27Data,
    type1Props: type2Data,
    bestSeller1Props: bestSeller3Data,
    bestSeller2Props: bestSeller4Data,
    priodeDessaiProps: priodeDessaiData,
    iDFixe4Props: iDFixe28Data,
    iDFixe5Props: iDFixe29Data,
    type2Props: type3Data,
};
