import React from 'react';
import TopNavigation from './components/TopNavigation';
import SidebarMenuItem from './components/SidebarMenuItem';
import Articles from './components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement22 from './components/Abonnement22';
import Filtre from './components/Filtre';
import ButtonsBtnTextIcon8 from './components/ButtonsBtnTextIcon8';
import Groupe455 from './components/Groupe455';
import ButtonsBtnTextIcon7 from './components/ButtonsBtnTextIcon7';
import styled from 'styled-components';
import {
    PoppinsMediumMirage10px,
    PoppinsMediumMirage12px,
    PoppinsMediumTundora10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './AbonnementEssaiGratuit.css';

function AbonnementEssaiGratuit(props: any): any {
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
        tradingCrypto5Props,
        abonnement2Props,
        sidebarMenuItem4Props,
        filtreProps,
        buttonsBtnTextIcon3Props,
        buttonsBtnTextIcon7Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-essai-gratuit screen">
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
                            <FlexCol1>
                                <Analytics>{analytics}</Analytics>
                                <Search>
                                    <Name>{name1}</Name>
                                </Search>
                            </FlexCol1>
                            <Filtre name={filtreProps.name} className={filtreProps.className} />
                            <ButtonsBtnTextIcon8 className={buttonsBtnTextIcon3Props.className} />
                        </FlexRow1>
                        <OverlapGroup1>
                            <Groupe455 />
                            <GridTable>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                                <Name5>{name6}</Name5>
                            </GridTable>
                            <ExempleRow>
                                <Name6>{name7}</Name6>
                                <Name7>{name8}</Name7>
                                <Name8>{name9}</Name8>
                                <Membre style={{ backgroundImage: `url(${membre})` }}></Membre>
                                <FontAwsomepen src={fontawsomePen} />
                                <IconClose src={fontawsomeTimes} />
                            </ExempleRow>
                            <ButtonsBtnTextIcon7
                                className={buttonsBtnTextIcon7Props.className}
                                groupe3933Props={buttonsBtnTextIcon7Props.groupe3933Props}
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
    min-width: 156px;
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
    min-width: 104px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 19px;
    margin-left: 58px;
    margin-bottom: -4.5px;
    min-width: 84px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 100px;
    margin-bottom: -4.5px;
    min-width: 32px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 344px;
    margin-bottom: -4.5px;
    min-width: 140px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 291px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
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

const Name6 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 62px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name7 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 100px;
    min-width: 14px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name8 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 170px;
    min-width: 45px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 331px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 418px;
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

export default AbonnementEssaiGratuit;
