import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import TradingCrypto2 from './TradingCrypto2';
import Abonnement from './components/Abonnement';
import Filtre from './components/Filtre';
import ButtonsBtnTextIcon7 from './components/ButtonsBtnTextIcon7';
import Groupe455 from './components/Groupe455';
import styled from 'styled-components';
import {
    PoppinsMediumMirage10px,
    PoppinsMediumMirage12px,
    PoppinsMediumTundora10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './Pays.css';

function Pays(props: any): any {
    const {
        analytics,
        name1,
        name2,
        name3,
        name4,
        name5,
        name6,
        name7,
        name8,
        name9,
        name10,
        groupe1492,
        trac995,
        trac996,
        membre,
        fontawsomePen,
        fontawsomeTimes,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto2Props2,
        tradingCrypto2Props22,
        sidebarMenuItem4Props,
        filtreProps,
        buttonsBtnTextIcon7Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="pays screen">
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
                        <TradingCrypto2
                            fontawsomePen={tradingCrypto2Props2.fontawsomePen}
                            name={tradingCrypto2Props2.name}
                            className={tradingCrypto2Props2.className}
                        />
                        <Abonnement className={tradingCrypto2Props22.className} />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <FlexRow1>
                            <FlexCol1>
                                <Analytics>{analytics}</Analytics>
                                <Search>
                                    <Name>{name1}</Name>
                                </Search>
                            </FlexCol1>
                            <Filtre name={filtreProps.name} className={filtreProps.className} />
                            <ButtonsBtnTextIcon7 groupe3933Props={buttonsBtnTextIcon7Props.groupe3933Props} />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                                <Name5>{name6}</Name5>
                                <Name6>{name7}</Name6>
                            </GridTable>
                            <Row1>
                                <Name7>{name8}</Name7>
                                <Name8>{name9}</Name8>
                                <Name9>{name10}</Name9>
                                <Groupe1492 style={{ backgroundImage: `url(${groupe1492})` }}>
                                    <Trac995 src={trac995} />
                                    <Trac996 src={trac996} />
                                </Groupe1492>
                                <Membre style={{ backgroundImage: `url(${membre})` }}></Membre>
                                <FontAwsomepen src={fontawsomePen} />
                                <IconClose src={fontawsomeTimes} />
                            </Row1>
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
    min-width: 1561px;
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
    margin-left: 52px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 690px;
`;

const FlexRow1 = styled.div`
    height: 100px;
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 1228px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-right: 121px;
    min-width: 60px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Search = styled.div`
    height: 37px;
    margin-top: 28px;
    display: flex;
    padding: 5.5px 18px;
    align-items: flex-end;
    min-width: 317px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Name = styled.div`
    ${PoppinsMediumMirage10px}
    min-height: 17px;
    min-width: 67px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 570px;
    position: relative;
    margin-top: 20px;
    border-radius: 6px;
`;

const GridTable = styled.div`
    ${PoppinsMediumMirage12px}
    position: absolute;
    height: 17px;
    top: 24px;
    left: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 1194px;
`;

const Name1 = styled.div`
    min-height: 19px;
    margin-bottom: -4.5px;
    min-width: 14px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 31px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 188px;
    margin-bottom: -4.5px;
    min-width: 42px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 188px;
    margin-bottom: -4.5px;
    min-width: 55px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 42px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name6 = styled.div`
    min-height: 19px;
    margin-left: 297px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Row1 = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 17.5px 30px;
    align-items: center;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name7 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 6px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name8 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 156px;
    min-width: 37px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name9 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 182px;
    min-width: 14px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Groupe1492 = styled.div`
    width: 27px;
    height: 20px;
    margin-left: 220px;
    display: flex;
    justify-content: space-between;
    background-size: cover;
    background-position: 50% 50%;
`;

const Trac995 = styled.img`
    width: 8.893310546875px;
    margin-left: 0;
    object-fit: cover;
`;

const Trac996 = styled.img`
    width: 8.8935546875px;
    margin-right: 0;
    object-fit: cover;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 176px;
    margin-bottom: 0;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 311px;
    margin-top: 3px;
    object-fit: cover;
`;

const IconClose = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-top: 3px;
    object-fit: cover;
`;

export default Pays;
