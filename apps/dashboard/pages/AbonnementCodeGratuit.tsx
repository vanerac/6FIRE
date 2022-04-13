import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement7 from '../components/Abonnement7';
import Filtre2 from '../components/Filtre2';
import Filtre from '../components/Filtre';
import IconFeatherCopy from '../components/IconFeatherCopy';
import styled from 'styled-components';
import {
    PoppinsNormalTundora12px,
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
    PoppinsMediumMirage12px,
    PoppinsMediumTundora10px,
    PoppinsMediumMirage10px,
} from '../styledMixins';
import './AbonnementCodeGratuit.css';

function AbonnementCodeGratuit(props: any): any {
    const {
        analytics1,
        analytics2,
        phrase,
        tonCodePromoCo,
        ligne6,
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
        membre1,
        name11,
        fontawsomePen1,
        iconClose1,
        name12,
        name13,
        name14,
        membre2,
        fontawsomePen2,
        iconClose2,
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
        abonnement7Props,
        sidebarMenuItem4Props,
        filtreProps,
        iconFeatherCopy1Props,
        iconFeatherCopy2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="abonnement-code-gratuit screen">
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
                        <Abonnement7 {...abonnement7Props} />
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <Analytics>{analytics1}</Analytics>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre>
                            <Filtre2 />
                            <Abonnement>
                                <Phrase>{phrase}</Phrase>
                                <TonCodePromoco>{tonCodePromoCo}</TonCodePromoco>
                                <Ligne6 src={ligne6} />
                            </Abonnement>
                        </OverlapGroup1>
                        <FlexRow1>
                            <Search>
                                <Name>{name1}</Name>
                            </Search>
                            <Filtre name={filtreProps.name} className={filtreProps.className} />
                        </FlexRow1>
                        <OverlapGroup2>
                            <Groupe455>
                                <Rectangle619></Rectangle619>
                                <Rectangle621></Rectangle621>
                                <Rectangle622></Rectangle622>
                                <Rectangle621></Rectangle621>
                                <Rectangle622></Rectangle622>
                            </Groupe455>
                            <GridTable>
                                <Name1>{name2}</Name1>
                                <Name2>{name3}</Name2>
                                <Name3>{name4}</Name3>
                                <Name4>{name5}</Name4>
                                <Name5>{name6}</Name5>
                                <Name6>{name7}</Name6>
                            </GridTable>
                            <ExempleRow>
                                <Row1>
                                    <Name7>{name8}</Name7>
                                    <Name8>{name9}</Name8>
                                    <Name9>{name10}</Name9>
                                    <Membre style={{ backgroundImage: `url(${membre1})` }}></Membre>
                                    <Name10>{name11}</Name10>
                                    <IconFeatherCopy className={iconFeatherCopy1Props.className} />
                                    <FontAwsomepen src={fontawsomePen1} />
                                    <IconClose src={iconClose1} />
                                </Row1>
                                <Row2>
                                    <Name11>{name12}</Name11>
                                    <Name12>{name13}</Name12>
                                    <Name13>{name14}</Name13>
                                    <Membre1 style={{ backgroundImage: `url(${membre2})` }}></Membre1>
                                    <IconFeatherCopy className={iconFeatherCopy2Props.className} />
                                    <FontAwsomepen1 src={fontawsomePen2} />
                                    <IconClose1 src={iconClose2} />
                                </Row2>
                            </ExempleRow>
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
    align-items: center;
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
    margin-bottom: 23.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 840px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 22px;
    min-width: 272px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 138px;
    position: relative;
    margin-top: 24px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 120px;
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
    width: 114px;
    height: 22px;
    margin-left: 19.23%;
    margin-right: 18.13%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Abonnement = styled.div`
    position: absolute;
    width: 1186px;
    top: 66px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const Phrase = styled.div`
    ${LatoNormalComet10px}
    width: 296px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const TonCodePromoco = styled.p`
    ${PoppinsNormalTundora12px}
    width: 1186px;
    min-height: 19px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 1184px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

const FlexRow1 = styled.div`
    position: relative;
    margin-top: 23px;
    display: flex;
    align-items: flex-start;
    min-width: 415px;
`;

const Search = styled.div`
    height: 37px;
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

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 570px;
    position: relative;
    margin-top: 14px;
    border-radius: 6px;
`;

const Groupe455 = styled.div`
    position: absolute;
    width: 1259px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 72px 0;
    align-items: flex-start;
    min-height: 570px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Rectangle619 = styled.div`
    width: 1259px;
    height: 62px;
    margin-top: 116px;
    background-color: var(--whisper);
`;

const Rectangle621 = styled.div`
    width: 1259px;
    height: 62px;
    background-color: var(--white);
`;

const Rectangle622 = styled.div`
    width: 1259px;
    height: 62px;
    background-color: var(--whisper);
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
    min-width: 81px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 19px;
    margin-left: 81px;
    margin-bottom: -4.5px;
    min-width: 72px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 112px;
    margin-bottom: -4.5px;
    min-width: 55px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 321px;
    margin-bottom: -4.5px;
    min-width: 43px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 81px;
    margin-bottom: -4.5px;
    min-width: 71px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name6 = styled.div`
    min-height: 19px;
    margin-left: 236px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const ExempleRow = styled.div`
    ${PoppinsMediumTundora10px}
    position: absolute;
    width: 1259px;
    height: 124px;
    top: 64px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Row1 = styled.div`
    flex: 1;
    max-height: 62px;
    position: relative;
    height: 62px;
    display: flex;
    padding: 17.5px 28px;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    background-color: var(--whisper);
`;

const Name7 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    min-width: 47px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name8 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 115px;
    min-width: 62px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name9 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 122px;
    min-width: 48px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre = styled.div`
    width: 18px;
    height: 18px;
    margin-left: 328px;
    margin-top: 3px;
    background-size: cover;
    background-position: 50% 50%;
`;

const Name10 = styled.div`
    min-height: 17px;
    align-self: flex-end;
    margin-left: 104px;
    min-width: 84px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
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

const Row2 = styled.div`
    flex: 1;
    max-height: 62px;
    position: relative;
    height: 62px;
    display: flex;
    padding: 18.2px 28px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 100%;
    background-color: var(--white);
`;

const Name11 = styled.div`
    min-height: 17px;
    align-self: center;
    margin-top: 2px;
    min-width: 47px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name12 = styled.div`
    min-height: 17px;
    align-self: center;
    margin-left: 115px;
    margin-top: 2px;
    min-width: 62px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Name13 = styled.div`
    min-height: 17px;
    align-self: center;
    margin-left: 122px;
    margin-top: 2px;
    min-width: 48px;
    letter-spacing: 0.07px;
    line-height: 10px;
    white-space: nowrap;
`;

const Membre1 = styled.div`
    width: 20px;
    height: 18px;
    margin-left: 327px;
    margin-top: 1.56px;
    background-size: cover;
    background-position: 50% 50%;
`;

const FontAwsomepen1 = styled.img`
    width: 18px;
    height: 18px;
    margin-left: 13px;
    object-fit: cover;
`;

const IconClose1 = styled.img`
    width: 13px;
    height: 13px;
    margin-left: 13px;
    margin-top: 2.48px;
    object-fit: cover;
`;

export default AbonnementCodeGratuit;
