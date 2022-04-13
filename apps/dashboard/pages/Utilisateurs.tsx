import React from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import SidebarMenuItem2 from '../components/SidebarMenuItem2';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import Filtre from '../components/Filtre';
import FiltreDate from '../components/FiltreDate';
import ButtonsBtnTextIcon from '../components/ButtonsBtnTextIcon';
import Groupe455 from '../components/Groupe455';
import styled from 'styled-components';
import {
    PoppinsMediumMirage10px,
    PoppinsMediumMirage12px,
    PoppinsMediumTundora10px,
    PoppinsSemiboldSemiBoldMirage24px,
} from '../styledMixins';
import './Utilisateurs.css';

function Utilisateurs(props: any) {
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
        name11,
        name12,
        name13,
        membre,
        fontawsomePen,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem2Props2,
        articlesProps,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        sidebarMenuItem3Props,
        filtre1Props,
        filtre2Props,
        filtre3Props,
        filtre4Props,
        filtreDateProps,
        buttonsBtnTextIconProps,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="utilisateurs screen">
                <TopNavigation
                    groupe2={topNavigationProps.groupe2}
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
                        <SidebarMenuItem2
                            name={sidebarMenuItem2Props.name}
                            className={sidebarMenuItem2Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props.iconsNavigationIcon12StatesProps}
                        />
                        <SidebarMenuItem
                            name={sidebarMenuItem2Props2.name}
                            className={sidebarMenuItem2Props2.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem2Props2.iconsNavigationIcon12StatesProps}
                        />
                        <Articles
                            className={articlesProps.className}
                            iconsNavigationIcon12StatesProps={articlesProps.iconsNavigationIcon12StatesProps}
                        />
                        <TradingCrypto iconPencil={tradingCrypto1Props.iconPencil} name={tradingCrypto1Props.name} />
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
                        <Abonnement />
                        <SidebarMenuItem
                            name={sidebarMenuItem3Props.name}
                            className={sidebarMenuItem3Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem3Props.iconsNavigationIcon12StatesProps}
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
                            <Filtre name={filtre1Props.name} />
                            <Filtre name={filtre2Props.name} className={filtre2Props.className} />
                            <Filtre name={filtre3Props.name} className={filtre3Props.className} />
                            <Filtre name={filtre4Props.name} className={filtre4Props.className} />
                            <FiltreDate calendarEvent={filtreDateProps.calendarEvent} text={filtreDateProps.text} />
                            <ButtonsBtnTextIcon
                                text={buttonsBtnTextIconProps.text}
                                className={buttonsBtnTextIconProps.className}
                                iconsNavigationIcon12StatesProps={
                                    buttonsBtnTextIconProps.iconsNavigationIcon12StatesProps
                                }
                            />
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
                                <Name7>{name8}</Name7>
                            </GridTable>
                            <Groupe454>
                                <Name8>{name9}</Name8>
                                <Name9>{name10}</Name9>
                                <Name10>{name11}</Name10>
                                <Name11>{name12}</Name11>
                                <Name12>{name13}</Name12>
                                <Membre style={{ backgroundImage: `url(${membre})` }}></Membre>
                                <Link to="/details-utilisateurs" className="align-self-flex-center">
                                    <FontAwsomepen src={fontawsomePen} />
                                </Link>
                            </Groupe454>
                        </OverlapGroup1>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 939px;
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
    min-height: 939px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 707px;
`;

const FlexRow1 = styled.div`
    height: 122px;
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: 1259px;
`;

const FlexCol1 = styled.div`
    width: 317px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 120px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    min-width: 142px;
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
    margin-top: 15px;
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
    min-width: 36px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 49px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 31px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 82px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name6 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 53px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name7 = styled.div`
    min-height: 19px;
    margin-left: 148px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Groupe454 = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    height: 62px;
    top: 64px;
    left: 0;
    display: flex;
    padding: 17.5px 30px;
    align-items: flex-end;
    min-width: 1259px;
    background-color: var(--whisper);
`;

const Name8 = styled.div`
    min-height: 17px;
    min-width: 24px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name9 = styled.div`
    min-height: 17px;
    margin-left: 138px;
    min-width: 131px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name10 = styled.div`
    min-height: 17px;
    margin-left: 53px;
    min-width: 32px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name11 = styled.div`
    min-height: 17px;
    margin-left: 165px;
    min-width: 32px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name12 = styled.div`
    min-height: 17px;
    margin-left: 147px;
    min-width: 120px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    align-self: center;
    margin-left: 127px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen = styled.img`
    width: 18px;
    height: 18px;
    align-self: center;
    margin-left: 177px;
    margin-top: 3px;
    object-fit: cover;
    cursor: pointer;
`;

export default Utilisateurs;
