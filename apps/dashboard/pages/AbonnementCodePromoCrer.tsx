import React from 'react';
import TopNavigation2 from '../components/TopNavigation2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement22 from '../components/Abonnement22';
import ButtonsBtnTextIcon82 from '../components/ButtonsBtnTextIcon82';
import Titre from '../components/Titre';
import IDFixe from '../components/IDFixe';
import Filtre2 from '../components/Filtre2';
import BestSeller from '../components/BestSeller';
import Abonnement42 from '../components/Abonnement42';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './AbonnementCodePromoCrer.css';
import {
    abonnement222Data,
    abonnement422Data,
    articles17Data,
    bestSeller5Data,
    buttonsBtnTextIcon821Data,
    iDFixe30Data,
    iDFixe31Data,
    sidebarMenuItem79Data,
    sidebarMenuItem80Data,
    sidebarMenuItem81Data,
    sidebarMenuItem82Data,
    titre9Data,
    topNavigation26Data,
    tradingCrypto91Data,
    tradingCrypto92Data,
    tradingCrypto93Data,
    tradingCrypto94Data,
    tradingCrypto95Data,
} from './index';

function AbonnementCodePromoCrer(props: any): any {
    const {
        analytics,
        rductionFixe,
        ligne6,
        topNavigation2Props,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        abonnement2Props,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon8Props,
        titreProps,
        iDFixe1Props,
        iDFixe2Props,
        bestSellerProps,
        abonnement4Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-code-promo-creer screen">
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
                        <Abonnement22
                            overlapGroup={abonnement2Props.overlapGroup}
                            gestionAbonnements1Props={abonnement2Props.gestionAbonnements1Props}
                            gestionAbonnements2Props={abonnement2Props.gestionAbonnements2Props}
                            essaiGratuit1Props={abonnement2Props.essaiGratuit1Props}
                            essaiGratuit2Props={abonnement2Props.essaiGratuit2Props}
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
                            <ButtonsBtnTextIcon82 groupe3934Props={buttonsBtnTextIcon8Props.groupe3934Props} />
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
                            <RductionFixe>
                                <RductionFixe1>{rductionFixe}</RductionFixe1>
                                <Ligne6 src={ligne6} />
                            </RductionFixe>
                            <IDFixe
                                idUser={iDFixe2Props.idUser}
                                number={iDFixe2Props.number}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                            <Filtre2 />
                            <BestSeller className={bestSellerProps.className}>{bestSellerProps.children}</BestSeller>
                            <Abonnement42 typeProps={abonnement4Props.typeProps} />
                        </OverlapGroup1>
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
    margin-top: 39.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 284px;
`;

const FlexRow1 = styled.div`
    height: 50px;
    position: relative;
    margin-left: 21px;
    display: flex;
    align-items: flex-start;
    min-width: 1194px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 156px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 219px;
    position: relative;
    margin-top: 15px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 201px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const RductionFixe = styled.div`
    position: absolute;
    width: 268px;
    height: 40px;
    top: 62px;
    left: 357px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const RductionFixe1 = styled.div`
    ${LatoNormalComet10px}
    margin-right: 23.8px;
    flex: 1;
    max-height: 14px;
    height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Ligne6 = styled.img`
    margin-left: 0.5px;
    margin-right: 0;
    flex: 1;
    max-height: 1px;
    margin-bottom: -0.5px;
    height: 1px;
    object-fit: cover;
`;

export default AbonnementCodePromoCrer;
export const abonnementCodePromoCrerData = {
    analytics: 'Code promo',
    rductionFixe: 'Réduction fixe',
    ligne6: '/img/ligne-6-1@1x.png',
    topNavigation2Props: topNavigation26Data,
    sidebarMenuItem1Props: sidebarMenuItem79Data,
    sidebarMenuItem2Props: sidebarMenuItem80Data,
    sidebarMenuItem3Props: sidebarMenuItem81Data,
    articlesProps: articles17Data,
    tradingCrypto1Props: tradingCrypto91Data,
    tradingCrypto2Props: tradingCrypto92Data,
    tradingCrypto3Props: tradingCrypto93Data,
    tradingCrypto4Props: tradingCrypto94Data,
    tradingCrypto5Props: tradingCrypto95Data,
    abonnement2Props: abonnement222Data,
    sidebarMenuItem4Props: sidebarMenuItem82Data,
    buttonsBtnTextIcon8Props: buttonsBtnTextIcon821Data,
    titreProps: titre9Data,
    iDFixe1Props: iDFixe30Data,
    iDFixe2Props: iDFixe31Data,
    bestSellerProps: bestSeller5Data,
    abonnement4Props: abonnement422Data,
};
