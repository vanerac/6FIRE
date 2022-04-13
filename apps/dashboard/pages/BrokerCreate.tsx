import React from 'react';
import TopNavigation2 from '../components/TopNavigation2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import TradingCrypto2 from './TradingCrypto2';
import Abonnement from '../components/Abonnement';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import ButtonsBtnTextIcon5 from '../components/ButtonsBtnTextIcon5';
import IDFixe from '../components/IDFixe';
import styled from 'styled-components';
import {
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './BrokerCreate.css';

function BrokerCrerUnBroker(props: any): any {
    const {
        analytics1,
        analytics2,
        logoBroker,
        image1,
        topNavigation2Props,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto2Props2,
        tradingCrypto4Props,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon3Props,
        buttonsBtnTextIcon5Props,
        iDFixe1Props,
        iDFixe2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="broker-creer-un-broker screen">
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
                        <TradingCrypto2
                            fontawsomePen={tradingCrypto2Props2.fontawsomePen}
                            name={tradingCrypto2Props2.name}
                            className={tradingCrypto2Props2.className}
                        />
                        <TradingCrypto
                            iconPencil={tradingCrypto4Props.iconPencil}
                            name={tradingCrypto4Props.name}
                            className={tradingCrypto4Props.className}
                        />
                        <Abonnement />
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
                            <Image>
                                <LogoBroker>{logoBroker}</LogoBroker>
                                <FlexRow2>
                                    <Image1 src={image1} />
                                    <ButtonsBtnTextIcon5 className={buttonsBtnTextIcon5Props.className}>
                                        {buttonsBtnTextIcon5Props.children}
                                    </ButtonsBtnTextIcon5>
                                </FlexRow2>
                            </Image>
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
                        </OverlapGroup1>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 825px;
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
    min-height: 825px;
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
    height: 35px;
    position: relative;
    margin-left: 13px;
    display: flex;
    align-items: center;
    min-width: 1160px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    min-height: 35px;
    min-width: 82px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 301px;
    position: relative;
    margin-top: 30px;
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
    width: 48px;
    height: 22px;
    margin-left: 37.36%;
    margin-right: 36.26%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Image = styled.div`
    position: absolute;
    width: 286px;
    top: 128px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 141px;
`;

const LogoBroker = styled.div`
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
    min-width: 295px;
`;

const Image1 = styled.img`
    width: 178px;
    height: 138px;
    object-fit: cover;
`;

export default BrokerCrerUnBroker;
