import React from 'react';
import TopNavigation2 from '../components/TopNavigation2';
import SidebarMenuItem from '../components/SidebarMenuItem';
import SidebarMenuItem2 from '../components/SidebarMenuItem2';
import Articles from '../components/Articles';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import ButtonsBtnTextIcon4 from '../components/ButtonsBtnTextIcon4';
import Email from '../components/Email';
import IDFixe from '../components/IDFixe';
import EmailConfirm from '../components/EmailConfirm';
import Titre from '../components/Titre';
import Historique from '../components/Historique';
import styled from 'styled-components';
import {
    LatoNormalComet10px,
    PoppinsNormalComet12px,
    PoppinsNormalVulcan12px,
    PoppinsSemiboldSemiBoldMirage24px,
    PoppinsSemiboldSemiBoldWhite14px,
} from '../styledMixins';
import '../styles/DetailsUtilisateur.css';
import {
    articles3Data,
    buttonsBtnTextIcon32Data,
    buttonsBtnTextIcon33Data,
    buttonsBtnTextIcon34Data,
    buttonsBtnTextIcon41Data,
    buttonsBtnTextIcon42Data,
    email1Data,
    email2Data,
    email3Data,
    emailConfirm1Data,
    emailConfirm2Data,
    historique1Data,
    historique2Data,
    iDFixe1Data,
    iDFixe2Data,
    sidebarMenuItem10Data,
    sidebarMenuItem11Data,
    sidebarMenuItem12Data,
    sidebarMenuItem24Data,
    titre1Data,
    topNavigation21Data,
    tradingCrypto11Data,
    tradingCrypto12Data,
    tradingCrypto13Data,
    tradingCrypto14Data,
    tradingCrypto15Data,
} from './index';

function DtailsUtilisateurs(props: any): any {
    const {
        analytics1,
        analytics2,
        numroDeTlphone,
        x33France,
        iconIonicIosArrowDown,
        ligne36,
        phone,
        ligne61,
        analytics3,
        analytics4,
        notes,
        ligne62,
        topNavigation2Props,
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
        buttonsBtnTextIcon31Props,
        buttonsBtnTextIcon41Props,
        buttonsBtnTextIcon32Props,
        buttonsBtnTextIcon42Props,
        buttonsBtnTextIcon33Props,
        email1Props,
        email2Props,
        email3Props,
        iDFixe1Props,
        iDFixe2Props,
        emailConfirm1Props,
        emailConfirm2Props,
        titreProps,
        historique1Props,
        historique2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="details-utilisateurs screen">
                <TopNavigation2
                    groupe2={topNavigation2Props.groupe2}
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
                        <Articles iconsNavigationIcon12StatesProps={articlesProps.iconsNavigationIcon12StatesProps} />
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
                        <Analytics>{analytics1}</Analytics>
                        <Action>
                            <ButtonsBtnTextIcon3>{buttonsBtnTextIcon31Props.children}</ButtonsBtnTextIcon3>
                            <ButtonsBtnTextIcon4 groupe393Props={buttonsBtnTextIcon41Props.groupe393Props} />
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon32Props.className}>
                                {buttonsBtnTextIcon32Props.children}
                            </ButtonsBtnTextIcon3>
                            <ButtonsBtnTextIcon4
                                className={buttonsBtnTextIcon42Props.className}
                                groupe393Props={buttonsBtnTextIcon42Props.groupe393Props}
                            />
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon33Props.className}>
                                {buttonsBtnTextIcon33Props.children}
                            </ButtonsBtnTextIcon3>
                        </Action>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre1>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre1>
                            <Email email={email1Props.email} elodieElodieGmailCom={email1Props.elodieElodieGmailCom} />
                            <Email
                                email={email2Props.email}
                                elodieElodieGmailCom={email2Props.elodieElodieGmailCom}
                                className={email2Props.className}
                            />
                            <Email
                                email={email3Props.email}
                                elodieElodieGmailCom={email3Props.elodieElodieGmailCom}
                                className={email3Props.className}
                            />
                            <IDFixe
                                idUser={iDFixe1Props.idUser}
                                number={iDFixe1Props.number}
                                ligne6={iDFixe1Props.ligne6}
                            />
                            <NumroDeTlphone>
                                <NumroDeTlphone1>{numroDeTlphone}</NumroDeTlphone1>
                                <FlexRow1>
                                    <FlexCol1>
                                        <FlexRow2>
                                            <X33France>{x33France}</X33France>
                                            <IconIonicIosArrowDown src={iconIonicIosArrowDown} />
                                        </FlexRow2>
                                        <Ligne36 src={ligne36} />
                                    </FlexCol1>
                                    <FlexCol2>
                                        <Phone>{phone}</Phone>
                                        <Ligne6 src={ligne61} />
                                    </FlexCol2>
                                </FlexRow1>
                            </NumroDeTlphone>
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre1>
                                <Analytics2>{analytics3}</Analytics2>
                            </Titre1>
                            <IDFixe
                                idUser={iDFixe2Props.idUser}
                                number={iDFixe2Props.number}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                            <EmailConfirm emailConfirm={emailConfirm1Props.emailConfirm} />
                            <EmailConfirm
                                emailConfirm={emailConfirm2Props.emailConfirm}
                                className={emailConfirm2Props.className}
                            />
                        </OverlapGroup2>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre2>
                                <Analytics3>{analytics4}</Analytics3>
                            </Titre2>
                            <Email1>
                                <Notes>{notes}</Notes>
                                <Ligne61 src={ligne62} />
                            </Email1>
                        </OverlapGroup2>
                        <OverlapGroup4>
                            <Rectangle6322></Rectangle6322>
                            <Titre>{titreProps.children}</Titre>
                            <Historique {...historique1Props} />
                            <Historique {...historique2Props} />
                        </OverlapGroup4>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 1352px;
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
    min-height: 1352px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 1098px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 9px;
    min-width: 124px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Action = styled.div`
    height: 68px;
    position: relative;
    margin-top: 20px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    min-width: 1259px;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 188px;
    position: relative;
    margin-top: 21px;
`;

const Rectangle632 = styled.div`
    position: absolute;
    width: 1259px;
    height: 170px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Titre1 = styled.div`
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
    width: 148px;
    height: 22px;
    margin-left: 9.89%;
    margin-right: 8.79%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const NumroDeTlphone = styled.div`
    position: absolute;
    width: 268px;
    top: 114px;
    left: 19px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const NumroDeTlphone1 = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow1 = styled.div`
    height: 23px;
    margin-top: 3px;
    display: flex;
    align-items: flex-start;
    min-width: 268px;
`;

const FlexCol1 = styled.div`
    width: 97px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 23px;
`;

const FlexRow2 = styled.div`
    height: 19px;
    display: flex;
    align-items: center;
    min-width: 93px;
`;

const X33France = styled.div`
    ${PoppinsNormalVulcan12px}
    width: 84px;
    min-height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const IconIonicIosArrowDown = styled.img`
    width: 9px;
    height: 5px;
    margin-left: 1px;
    margin-bottom: 2px;
    object-fit: cover;
`;

const Ligne36 = styled.img`
    width: 97px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

const FlexCol2 = styled.div`
    width: 167px;
    margin-left: 3px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 23px;
`;

const Phone = styled.div`
    ${PoppinsNormalVulcan12px}
    width: 130px;
    min-height: 19px;
    margin-left: 3.5px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 167px;
    height: 1px;
    margin-top: 3px;
    object-fit: cover;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 123px;
    position: relative;
    margin-top: 21px;
`;

const Rectangle6321 = styled.div`
    position: absolute;
    width: 1259px;
    height: 105px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Analytics2 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 164px;
    height: 22px;
    margin-left: 5.49%;
    margin-right: 4.4%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Titre2 = styled.div`
    position: absolute;
    width: 102px;
    height: 36px;
    top: 0;
    left: 39px;
    display: flex;
    background-color: var(--blue-ribbon);
    border-radius: 10px;
`;

const Analytics3 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 44px;
    height: 22px;
    margin-left: 29.41%;
    margin-right: 27.45%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const Email1 = styled.div`
    position: absolute;
    width: 1172px;
    height: 22px;
    top: 68px;
    left: 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Notes = styled.div`
    ${PoppinsNormalComet12px}
    margin-right: 33.4px;
    flex: 1;
    max-height: 19px;
    height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne61 = styled.img`
    margin-left: 0.5px;
    flex: 1;
    max-height: 1px;
    margin-bottom: -0.5px;
    height: 1px;
    object-fit: cover;
`;

const OverlapGroup4 = styled.div`
    width: 1259px;
    height: 457px;
    position: relative;
    margin-top: 21px;
`;

const Rectangle6322 = styled.div`
    position: absolute;
    width: 1259px;
    height: 439px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

export default DtailsUtilisateurs;
export const dtailsUtilisateursData = {
    analytics1: 'Profil user',
    analytics2: 'Données utilisateurs',
    numroDeTlphone: 'Numéro de téléphone',
    x33France: '+ 33 (France)',
    iconIonicIosArrowDown: '/img/icon-ionic-ios-arrow-down-4@1x.png',
    ligne36: '/img/ligne-36@1x.png',
    phone: '77777777',
    ligne61: '/img/ligne-6-4@1x.png',
    analytics3: 'Données de connexion',
    analytics4: 'Notes',
    notes: 'Notes…',
    ligne62: '/img/ligne-6-6@1x.png',
    topNavigation2Props: topNavigation21Data,
    sidebarMenuItem1Props: sidebarMenuItem10Data,
    sidebarMenuItem2Props: sidebarMenuItem24Data,
    sidebarMenuItem2Props2: sidebarMenuItem11Data,
    articlesProps: articles3Data,
    tradingCrypto1Props: tradingCrypto11Data,
    tradingCrypto2Props: tradingCrypto12Data,
    tradingCrypto3Props: tradingCrypto13Data,
    tradingCrypto4Props: tradingCrypto14Data,
    tradingCrypto5Props: tradingCrypto15Data,
    sidebarMenuItem3Props: sidebarMenuItem12Data,
    buttonsBtnTextIcon31Props: buttonsBtnTextIcon32Data,
    buttonsBtnTextIcon41Props: buttonsBtnTextIcon41Data,
    buttonsBtnTextIcon32Props: buttonsBtnTextIcon33Data,
    buttonsBtnTextIcon42Props: buttonsBtnTextIcon42Data,
    buttonsBtnTextIcon33Props: buttonsBtnTextIcon34Data,
    email1Props: email1Data,
    email2Props: email2Data,
    email3Props: email3Data,
    iDFixe1Props: iDFixe1Data,
    iDFixe2Props: iDFixe2Data,
    emailConfirm1Props: emailConfirm1Data,
    emailConfirm2Props: emailConfirm2Data,
    titreProps: titre1Data,
    historique1Props: historique1Data,
    historique2Props: historique2Data,
};
