import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement2 from './components/Abonnement2';
import Filtre from './components/Filtre';
import ButtonsBtnTextIcon4 from './components/ButtonsBtnTextIcon4';
import Groupe455 from './components/Groupe455';
import GridTable from './components/GridTable';
import styled from 'styled-components';
import { PoppinsMediumMirage10px, PoppinsMediumTundora10px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './AbonnementGestionAbonnements.css';

function AbonnementGestionAbonnements(props: any): any {
    const {
        analytics,
        name1,
        name2,
        name3,
        name4,
        membre1,
        membre2,
        fontawsomePen,
        iconClose,
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
        abonnement2Props,
        sidebarMenuItem4Props,
        filtreProps,
        buttonsBtnTextIcon4Props,
        gridTableProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-gestion-abonnements screen">
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
                        <Abonnement2 {...abonnement2Props} />
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
                            <ButtonsBtnTextIcon4
                                className={buttonsBtnTextIcon4Props.className}
                                groupe393Props={buttonsBtnTextIcon4Props.groupe393Props}
                            />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable
                                name1={gridTableProps.name1}
                                name2={gridTableProps.name2}
                                name3={gridTableProps.name3}
                                name4={gridTableProps.name4}
                                name5={gridTableProps.name5}
                            />
                            <Row1>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Membre style={{ backgroundImage: `url(${membre1})` }}></Membre>
                                <Membre1 style={{ backgroundImage: `url(${membre2})` }}></Membre1>
                                <FontAwsomepen src={fontawsomePen} />
                                <IconClose src={iconClose} />
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
    width: 1261px;
    margin-left: 51px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 714px;
`;

const FlexRow1 = styled.div`
    height: 120px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 1261px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 120px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 3px;
    min-width: 276px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Search = styled.div`
    height: 37px;
    margin-top: 48px;
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
    margin-top: 23px;
    border-radius: 6px;
`;

const Row1 = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 13.7px 30px;
    align-items: flex-end;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name1 = styled.div`
    min-height: 17px;
    margin-bottom: 3.78px;
    min-width: 37px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 17px;
    margin-left: 125px;
    margin-bottom: 3.78px;
    min-width: 41px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 17px;
    margin-left: 143px;
    margin-bottom: 3.78px;
    min-width: 45px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    align-self: center;
    margin-left: 152px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Membre1 = styled.div`
    width: 18px;
    height: 18px;
    align-self: center;
    margin-left: 161px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 407px;
    object-fit: cover;
`;

const IconClose = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-bottom: 2.48px;
    object-fit: cover;
`;

export default AbonnementGestionAbonnements;
