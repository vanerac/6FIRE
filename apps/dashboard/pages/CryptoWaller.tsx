import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import TradingCrypto2 from './TradingCrypto2';
import Abonnement from './components/Abonnement';
import ButtonsBtnTextIcon3 from './components/ButtonsBtnTextIcon3';
import Titre2 from './components/Titre2';
import Filtre from './components/Filtre';
import Devise from './components/Devise';
import ButtonsBtnTextIcon5 from './components/ButtonsBtnTextIcon5';
import BoutonPourSupprimer from './components/BoutonPourSupprimer';
import Editeur from './components/Editeur';
import IDFixe2 from './components/IDFixe2';
import styled from 'styled-components';
import {
    PoppinsNormalTundora12px,
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './CryptoWallet.css';

function CryptoWallet(props: any): any {
    const {
        analytics1,
        cryptoSlectionn,
        bitcoin,
        x1421344023328,
        trac993,
        ligne6,
        analytics2,
        paragraphe,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto2Props2,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto4Props2,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon3Props,
        titre2Props,
        filtreProps,
        devise1Props,
        devise2Props,
        buttonsBtnTextIcon5Props,
        boutonPourSupprimerProps,
        editeurProps,
        iDFixe2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="crypto-wallet screen">
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
                        <TradingCrypto2
                            fontawsomePen={tradingCrypto2Props2.fontawsomePen}
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
                        <OverlapGroup2>
                            <Rectangle632></Rectangle632>
                            <Titre2>{titre2Props.children}</Titre2>
                            <Filtre name={filtreProps.name} className={filtreProps.className} />
                            <CryptoSelect>
                                <CryptoSlectionn>{cryptoSlectionn}</CryptoSlectionn>
                                <FlexRow2>
                                    <Bitcoin>{bitcoin}</Bitcoin>
                                    <LayerX00201>
                                        <X1421344023328 style={{ backgroundImage: `url(${x1421344023328})` }}>
                                            <Trac993 src={trac993} />
                                        </X1421344023328>
                                    </LayerX00201>
                                </FlexRow2>
                                <Ligne6 src={ligne6} />
                            </CryptoSelect>
                            <Devise
                                devise={devise1Props.devise}
                                phone={devise1Props.phone}
                                ligne6={devise1Props.ligne6}
                            />
                            <Devise
                                devise={devise2Props.devise}
                                phone={devise2Props.phone}
                                ligne6={devise2Props.ligne6}
                                className={devise2Props.className}
                            />
                            <Groupe1491>
                                <ButtonsBtnTextIcon5 className={buttonsBtnTextIcon5Props.className}>
                                    {buttonsBtnTextIcon5Props.children}
                                </ButtonsBtnTextIcon5>
                                <BoutonPourSupprimer className={boutonPourSupprimerProps.className} />
                            </Groupe1491>
                        </OverlapGroup2>
                        <OverlapGroup1>
                            <Rectangle6321></Rectangle6321>
                            <Titre>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre>
                            <Editeur src={editeurProps.src} />
                            <Paragraphe>{paragraphe}</Paragraphe>
                            <IDFixe2
                                dbut={iDFixe2Props.dbut}
                                date={iDFixe2Props.date}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                        </OverlapGroup1>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 1073px;
    display: flex;
    align-items: center;
    min-width: 1569px;
`;

const Sidebar = styled.div`
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    align-items: flex-start;
    min-height: 1073px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 60px;
    margin-bottom: 5.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 992px;
`;

const FlexRow1 = styled.div`
    height: 50px;
    position: relative;
    margin-left: 12px;
    display: flex;
    align-items: flex-start;
    min-width: 1185px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 170px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 301px;
    position: relative;
    margin-top: 39px;
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

const CryptoSelect = styled.div`
    position: absolute;
    width: 186px;
    top: 62px;
    left: 225px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const CryptoSlectionn = styled.div`
    ${LatoNormalComet10px}
    width: 162px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow2 = styled.div`
    height: 21px;
    margin-top: 1px;
    display: flex;
    align-items: flex-start;
    min-width: 180px;
`;

const Bitcoin = styled.div`
    ${PoppinsNormalTundora12px}
    width: 152px;
    min-height: 19px;
    align-self: flex-end;
    letter-spacing: 0;
    line-height: 12px;
`;

const LayerX00201 = styled.div`
    width: 20px;
    height: 20px;
    margin-left: 8px;
    display: flex;
`;

const X1421344023328 = styled.div`
    flex: 1;
    width: 20.357666015625px;
    display: flex;
    background-size: cover;
    background-position: 50% 50%;
`;

const Trac993 = styled.img`
    margin-top: 3.5px;
    margin-left: 5px;
    margin-right: 5.7px;
    flex: 1;
    margin-bottom: 3.9px;
    width: 9.740234375px;
    object-fit: cover;
`;

const Ligne6 = styled.img`
    width: 186px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

const Groupe1491 = styled.div`
    position: absolute;
    width: 1162px;
    height: 81px;
    top: 72px;
    left: 39px;
    display: flex;
    justify-content: space-between;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 568px;
    position: relative;
    margin-top: 34px;
`;

const Rectangle6321 = styled.div`
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

const Analytics1 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 66px;
    height: 22px;
    margin-left: 37.5%;
    margin-right: 36.72%;
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

export default CryptoWallet;
