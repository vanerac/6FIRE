import React from 'react';
import TopNavigation2 from './components/TopNavigation2';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import ButtonsBtnTextIcon4 from './components/ButtonsBtnTextIcon4';
import Titre from './components/Titre';
import IDFixe from './components/IDFixe';
import Type from './components/Type';
import BestSeller from './components/BestSeller';
import Toggle from './components/Toggle';
import Titre6 from './components/Titre6';
import PlateformeDePaiement from './components/PlateformeDePaiement';
import Titre7 from './components/Titre7';
import Lignes1 from './components/Lignes1';
import styled from 'styled-components';
import { PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './AbonnementCrerUnAbonnement.css';

function AbonnementCrerUnAbonnement(props: any): any {
    const {
        iconIonicIosArrowDown,
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
        tradingCrypto6Props,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon4Props,
        titreProps,
        iDFixe1Props,
        iDFixe2Props,
        iDFixe3Props,
        typeProps,
        bestSeller1Props,
        bestSeller2Props,
        toggleProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-creer-un-abonnement screen">
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
                        <OverlapGroup>
                            <TradingCrypto
                                iconPencil={tradingCrypto6Props.iconPencil}
                                name={tradingCrypto6Props.name}
                                className={tradingCrypto6Props.className}
                            />
                            <IconIonicIosArrowDown src={iconIonicIosArrowDown} />
                        </OverlapGroup>
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
                            <Type type={typeProps.type} mensuel={typeProps.mensuel} />
                            <BestSeller>{bestSeller1Props.children}</BestSeller>
                            <BestSeller className={bestSeller2Props.className}>{bestSeller2Props.children}</BestSeller>
                            <Toggle
                                activerLesSmsLinscription={toggleProps.activerLesSmsLinscription}
                                className={toggleProps.className}
                            />
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre6 />
                            <PlateformeDePaiement />
                        </OverlapGroup2>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre7 />
                            <Lignes1 />
                        </OverlapGroup2>
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

const OverlapGroup = styled.div`
    width: 230px;
    height: 52px;
    position: relative;
`;

const IconIonicIosArrowDown = styled.img`
    position: absolute;
    width: 12px;
    height: 7px;
    top: 23px;
    left: 196px;
    object-fit: cover;
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 53px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 626px;
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

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 137px;
    position: relative;
    margin-top: 34px;
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

export default AbonnementCrerUnAbonnement;
