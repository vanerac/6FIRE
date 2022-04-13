import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement4 from '../components/Abonnement4';
import Filtre from '../components/Filtre';
import ButtonsBtnTextIcon8 from '../components/ButtonsBtnTextIcon8';
import Groupe455 from '../components/Groupe455';
import GridTable from '../components/GridTable';
import IconFeatherCopy from '../components/IconFeatherCopy';
import styled from 'styled-components';
import { PoppinsMediumMirage10px, PoppinsMediumTundora10px, PoppinsSemiboldSemiBoldMirage24px } from '../styledMixins';
import './AbonnementCodePromo.css';

function AbonnementCodePromo(props: any): any {
    const {
        analytics,
        name1,
        name2,
        name3,
        name4,
        name5,
        membre,
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
        abonnement4Props,
        sidebarMenuItem4Props,
        filtre1Props,
        filtre2Props,
        gridTableProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-code-promo screen">
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
                        <Abonnement4 {...abonnement4Props} />
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
                            <Filtre name={filtre1Props.name} className={filtre1Props.className} />
                            <Filtre name={filtre2Props.name} className={filtre2Props.className} />
                            <ButtonsBtnTextIcon8 />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable
                                name1={gridTableProps.name1}
                                name2={gridTableProps.name2}
                                name3={gridTableProps.name3}
                                name4={gridTableProps.name4}
                                name5={gridTableProps.name5}
                                className={gridTableProps.className}
                            />
                            <ExempleRow>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                                <Membre style={{ backgroundImage: `url(${membre})` }}></Membre>
                                <IconFeatherCopy />
                                <FontAwsomepen src={fontawsomePen} />
                                <IconClose src={iconClose} />
                            </ExempleRow>
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
    min-width: 1560px;
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
    margin-left: 51px;
    margin-top: 34.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 688px;
`;

const FlexRow1 = styled.div`
    height: 94px;
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 1254px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 94px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-right: 79px;
    min-width: 154px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Search = styled.div`
    height: 37px;
    margin-top: 22px;
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

const ExempleRow = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 17.5px 28px;
    justify-content: flex-end;
    align-items: center;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name1 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 37px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 125px;
    min-width: 23px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 161px;
    min-width: 26px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 174px;
    min-width: 8px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 168px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 13px;
    margin-bottom: 0.13px;
    object-fit: cover;
`;

const IconClose = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-bottom: 0.13px;
    object-fit: cover;
`;

export default AbonnementCodePromo;
