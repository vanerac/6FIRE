import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import SidebarMenuItem2 from '../components/SidebarMenuItem2';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import Toggle from '../components/Toggle';
import styled from 'styled-components';
import {
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
    PoppinsNormalTundora12px,
} from '../styledMixins';
import './Settings.css';

function Paramtres(props: any): any {
    const {
        analytics1,
        analytics2,
        contenuDuSms,
        nom,
        ligne6,
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
        tradingCrypto5Props2,
        sidebarMenuItem2Props2,
        buttonsBtnTextIcon3Props,
        toggleProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="parametres screen">
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
                        <Abonnement className={tradingCrypto5Props2.className} />
                        <SidebarMenuItem2
                            name={sidebarMenuItem2Props2.name}
                            className={sidebarMenuItem2Props2.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props2.iconsNavigationIcon12StatesProps}
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
                            <ContenuSMS>
                                <ContenuDuSMS>{contenuDuSms}</ContenuDuSMS>
                                <Nom>{nom}</Nom>
                                <Ligne6 src={ligne6} />
                            </ContenuSMS>
                            <Toggle activerLesSmsLinscription={toggleProps.activerLesSmsLinscription} />
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
    min-height: 366px;
`;

const FlexRow1 = styled.div`
    height: 50px;
    position: relative;
    margin-right: 14px;
    display: flex;
    align-items: flex-start;
    min-width: 1197px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 146px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 301px;
    position: relative;
    margin-top: 15px;
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
    width: 132px;
    height: 22px;
    margin-left: 14.29%;
    margin-right: 13.19%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const ContenuSMS = styled.div`
    position: absolute;
    width: 1157px;
    top: 102px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const ContenuDuSMS = styled.div`
    ${LatoNormalComet10px}
    width: 1133px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Nom = styled.div`
    ${PoppinsNormalTundora12px}
    width: 1123px;
    min-height: 19px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 1156px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default Paramtres;
