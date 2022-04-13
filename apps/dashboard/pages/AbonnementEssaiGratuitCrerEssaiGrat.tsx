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
import Type from '../components/Type';
import Abonnement42 from '../components/Abonnement42';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './AbonnementEssaiGratuitCrerEssaiGrat.css';

function AbonnementEssaiGratuitCrerEssaiGrat(props: any): any {
    const {
        analytics,
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
        typeProps,
        abonnement4Props,
        iDFixe3Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-essai-gratuit-creer-essai-gratuit screen">
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
                            <ButtonsBtnTextIcon82
                                className={buttonsBtnTextIcon8Props.className}
                                groupe3934Props={buttonsBtnTextIcon8Props.groupe3934Props}
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
                            <Filtre2 />
                            <BestSeller className={bestSellerProps.className}>{bestSellerProps.children}</BestSeller>
                            <Type type={typeProps.type} mensuel={typeProps.mensuel} className={typeProps.className} />
                            <Abonnement42
                                className={abonnement4Props.className}
                                typeProps={abonnement4Props.typeProps}
                            />
                            <IDFixe
                                idUser={iDFixe3Props.idUser}
                                number={iDFixe3Props.number}
                                ligne6={iDFixe3Props.ligne6}
                                className={iDFixe3Props.className}
                            />
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
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 292px;
`;

const FlexRow1 = styled.div`
    height: 50px;
    position: relative;
    margin-left: 9px;
    display: flex;
    align-items: flex-start;
    min-width: 1198px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 346px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 226px;
    position: relative;
    margin-top: 15px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 208px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

export default AbonnementEssaiGratuitCrerEssaiGrat;
