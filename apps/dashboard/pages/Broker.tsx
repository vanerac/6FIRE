import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import TradingCrypto2 from './TradingCrypto2';
import Abonnement from './components/Abonnement';
import ButtonsBtnTextIcon6 from './components/ButtonsBtnTextIcon6';
import Groupe455 from './components/Groupe455';
import Row1 from './components/Row1';
import styled from 'styled-components';
import { PoppinsMediumMirage10px, PoppinsMediumMirage12px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './Broker.css';

function Broker(props: any): any {
    const {
        analytics,
        name1,
        name2,
        name3,
        name4,
        name5,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto2Props2,
        tradingCrypto4Props,
        abonnementProps,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon6Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="broker screen">
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
                        <Abonnement className={abonnementProps.className} />
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
                            <ButtonsBtnTextIcon6
                                className={buttonsBtnTextIcon6Props.className}
                                groupe3932Props={buttonsBtnTextIcon6Props.groupe3932Props}
                            />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                            </GridTable>
                            <Row1 />
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
    align-items: center;
    min-width: 1560px;
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
    margin-left: 51px;
    margin-bottom: 27.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 720px;
`;

const FlexRow1 = styled.div`
    height: 110px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 1240px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 110px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 58px;
    min-width: 82px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Search = styled.div`
    height: 37px;
    margin-top: 38px;
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
    margin-top: 40px;
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
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 178px;
    margin-bottom: -4.5px;
    min-width: 31px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 741px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

export default Broker;
