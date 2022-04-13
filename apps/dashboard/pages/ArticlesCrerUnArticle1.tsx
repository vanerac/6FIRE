import React from 'react';
import TopNavigation from '../components/TopNavigation';
import SidebarMenuItem from '../components/SidebarMenuItem';
import Articles2 from '../components/Articles2';
import TradingCrypto from './TradingCrypto';
import Abonnement from '../components/Abonnement';
import ButtonsBtnTextIcon3 from '../components/ButtonsBtnTextIcon3';
import Image1 from '../components/Image1';
import Filtre from '../components/Filtre';
import IDFixe from '../components/IDFixe';
import Titre3 from '../components/Titre3';
import Email from '../components/Email';
import Titre4 from '../components/Titre4';
import Titre5 from '../components/Titre5';
import BoutonPourSupprimer from '../components/BoutonPourSupprimer';
import styled from 'styled-components';
import {
    PoppinsNormalVulcan12px,
    PoppinsSemiboldSemiBoldWhite14px,
    LatoNormalComet10px,
    PoppinsSemiboldSemiBoldMirage24px,
    Border1pxSilver,
} from '../styledMixins';
import './ArticlesCrerUnArticle1.css';

function ArticlesCrerUnArticle1(props: any): any {
    const {
        analytics1,
        analytics2,
        notesDetailsTextEditor,
        description,
        axieInfinityEstUn,
        ligne61,
        salaireMoyen,
        lesJoueursDuMonde,
        ligne62,
        tarificationDeLaPlateforme,
        pourJouerAxieIn,
        ligne63,
        utilisateursGnran,
        address1,
        ligne64,
        financement,
        address2,
        ligne65,
        ncessiteUneAudience,
        non,
        ligne66,
        analytics3,
        analytics4,
        topNavigationProps,
        sidebarMenuItem1Props,
        sidebarMenuItem2Props,
        sidebarMenuItem3Props,
        articles2Props,
        tradingCrypto1Props,
        tradingCrypto2Props,
        tradingCrypto3Props,
        tradingCrypto4Props,
        tradingCrypto5Props,
        tradingCrypto5Props2,
        sidebarMenuItem4Props,
        buttonsBtnTextIcon31Props,
        buttonsBtnTextIcon32Props,
        image11Props,
        filtre1Props,
        iDFixe1Props,
        image12Props,
        emailProps,
        titre4Props,
        titre5Props,
        buttonsBtnTextIcon33Props,
        iDFixe2Props,
        buttonsBtnTextIcon34Props,
        filtre2Props,
    } = props;

    return (
        <div className="container-center-horizontal">
            <div className="articles-creer-un-article-1 screen">
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
                        <Articles2
                            className={articles2Props.className}
                            iconsNavigationIcon12StatesProps={articles2Props.iconsNavigationIcon12StatesProps}
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
                        <SidebarMenuItem
                            name={sidebarMenuItem4Props.name}
                            className={sidebarMenuItem4Props.className}
                            iconsNavigationIcon12StatesProps={sidebarMenuItem4Props.iconsNavigationIcon12StatesProps}
                        />
                    </Sidebar>
                    <FlexCol>
                        <Analytics>{analytics1}</Analytics>
                        <Action>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon31Props.className}>
                                {buttonsBtnTextIcon31Props.children}
                            </ButtonsBtnTextIcon3>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon32Props.className}>
                                {buttonsBtnTextIcon32Props.children}
                            </ButtonsBtnTextIcon3>
                        </Action>
                        <OverlapGroup1>
                            <Rectangle632></Rectangle632>
                            <Titre>
                                <Analytics1>{analytics2}</Analytics1>
                            </Titre>
                            <Image1
                                imagePrsentation={image11Props.imagePrsentation}
                                buttonsBtnTextIcon5Props={image11Props.buttonsBtnTextIcon5Props}
                            />
                            <Filtre name={filtre1Props.name} className={filtre1Props.className} />
                            <IDFixe
                                idUser={iDFixe1Props.idUser}
                                number={iDFixe1Props.number}
                                ligne6={iDFixe1Props.ligne6}
                                className={iDFixe1Props.className}
                            />
                            <Image1
                                imagePrsentation={image12Props.imagePrsentation}
                                className={image12Props.className}
                                buttonsBtnTextIcon5Props={image12Props.buttonsBtnTextIcon5Props}
                            />
                        </OverlapGroup1>
                        <OverlapGroup2>
                            <Rectangle6321></Rectangle6321>
                            <Titre3 />
                            <Email
                                email={emailProps.email}
                                elodieElodieGmailCom={emailProps.elodieElodieGmailCom}
                                className={emailProps.className}
                            />
                            <Editeur>
                                <TitreContainer>
                                    <Titre4 className={titre4Props.className} />
                                    <Titre5 className={titre5Props.className} />
                                </TitreContainer>
                                <OverlapGroup>
                                    <NotesDetailsTextEditor src={notesDetailsTextEditor} />
                                </OverlapGroup>
                            </Editeur>
                            <Description>
                                <Description1>{description}</Description1>
                                <AxieInfinityEstUn>{axieInfinityEstUn}</AxieInfinityEstUn>
                                <Ligne6 src={ligne61} />
                            </Description>
                            <SalaireMoyen>
                                <SalaireMoyen1>{salaireMoyen}</SalaireMoyen1>
                                <LesJoueursDuMonde>{lesJoueursDuMonde}</LesJoueursDuMonde>
                                <Ligne61 src={ligne62} />
                            </SalaireMoyen>
                            <Tarification>
                                <SalaireMoyen1>{tarificationDeLaPlateforme}</SalaireMoyen1>
                                <PourJouerAxieIn>{pourJouerAxieIn}</PourJouerAxieIn>
                                <Ligne62 src={ligne63} />
                            </Tarification>
                            <UsersGnrantsRevenus>
                                <SalaireMoyen1>{utilisateursGnran}</SalaireMoyen1>
                                <Address>{address1}</Address>
                                <Ligne61 src={ligne64} />
                            </UsersGnrantsRevenus>
                            <Financement>
                                <SalaireMoyen1>{financement}</SalaireMoyen1>
                                <Address1>{address2}</Address1>
                                <Ligne63 src={ligne65} />
                            </Financement>
                            <Audience>
                                <SalaireMoyen1>{ncessiteUneAudience}</SalaireMoyen1>
                                <Non>{non}</Non>
                                <Ligne64 src={ligne66} />
                            </Audience>
                        </OverlapGroup2>
                        <OverlapGroup3>
                            <Rectangle6322></Rectangle6322>
                            <Titre>
                                <Analytics2>{analytics3}</Analytics2>
                            </Titre>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon33Props.className}>
                                {buttonsBtnTextIcon33Props.children}
                            </ButtonsBtnTextIcon3>
                            <IDFixe
                                idUser={iDFixe2Props.idUser}
                                number={iDFixe2Props.number}
                                ligne6={iDFixe2Props.ligne6}
                                className={iDFixe2Props.className}
                            />
                        </OverlapGroup3>
                        <OverlapGroup4>
                            <Rectangle6323></Rectangle6323>
                            <Titre>
                                <Analytics3>{analytics4}</Analytics3>
                            </Titre>
                            <ButtonsBtnTextIcon3 className={buttonsBtnTextIcon34Props.className}>
                                {buttonsBtnTextIcon34Props.children}
                            </ButtonsBtnTextIcon3>
                            <Filtre name={filtre2Props.name} className={filtre2Props.className} />
                            <BoutonPourSupprimer />
                        </OverlapGroup4>
                    </FlexCol>
                </FlexRow>
            </div>
        </div>
    );
}

const FlexRow = styled.div`
    height: 2324px;
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
    min-height: 2324px;
    background-color: var(--white);
`;

const FlexCol = styled.div`
    width: 1259px;
    margin-left: 51px;
    margin-top: 38.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 2114px;
`;

const Analytics = styled.div`
    ${PoppinsSemiboldSemiBoldMirage24px}
    margin-bottom: -1px;
    min-height: 35px;
    margin-left: 35px;
    min-width: 286px;
    text-align: center;
    letter-spacing: 0.1px;
    line-height: 36px;
    white-space: nowrap;
`;

const Action = styled.div`
    width: 360px;
    height: 32px;
    position: relative;
    align-self: flex-end;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
`;

const OverlapGroup1 = styled.div`
    width: 1259px;
    height: 301px;
    position: relative;
    margin-top: 40px;
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
    width: 56px;
    height: 22px;
    margin-left: 35.16%;
    margin-right: 34.07%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
    width: 1259px;
    height: 1056px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle6321 = styled.div`
    position: absolute;
    width: 1259px;
    height: 1038px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Editeur = styled.div`
    position: absolute;
    width: 919px;
    top: 353px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 450px;
`;

const TitreContainer = styled.div`
    height: 28px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 232px;
`;

const OverlapGroup = styled.div`
    ${Border1pxSilver}
    height: 402px;
    margin-top: 20px;
    margin-left: 2px;
    display: flex;
    padding: 2px 9px;
    align-items: flex-start;
    min-width: 917px;
    background-color: var(--white);
`;

const NotesDetailsTextEditor = styled.img`
    width: 605px;
    height: 39px;
    object-fit: cover;
`;

const Description = styled.div`
    position: absolute;
    width: 1140px;
    top: 121px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 57px;
`;

const Description1 = styled.div`
    ${LatoNormalComet10px}
    width: 1116px;
    min-height: 14px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 10px;
`;

const AxieInfinityEstUn = styled.p`
    ${PoppinsNormalVulcan12px}
    width: 1106px;
    min-height: 37px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 1140px;
    height: 1px;
    margin-top: 2px;
    object-fit: cover;
`;

const SalaireMoyen = styled.div`
    position: absolute;
    width: 447px;
    top: 198px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 57px;
`;

const SalaireMoyen1 = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 10px;
`;

const LesJoueursDuMonde = styled.p`
    ${PoppinsNormalVulcan12px}
    width: 447px;
    height: 37px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne61 = styled.img`
    width: 445px;
    height: 1px;
    margin-top: 3px;
    object-fit: cover;
`;

const Tarification = styled.div`
    position: absolute;
    width: 643px;
    top: 198px;
    left: 534px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 57px;
`;

const PourJouerAxieIn = styled.p`
    ${PoppinsNormalVulcan12px}
    width: 643px;
    height: 37px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne62 = styled.img`
    width: 641px;
    height: 1px;
    margin-top: 3px;
    object-fit: cover;
`;

const UsersGnrantsRevenus = styled.div`
    position: absolute;
    width: 447px;
    top: 275px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 38px;
`;

const Address = styled.p`
    ${PoppinsNormalVulcan12px}
    width: 447px;
    height: 18px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Financement = styled.div`
    position: absolute;
    width: 249px;
    top: 275px;
    left: 534px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 38px;
`;

const Address1 = styled.div`
    ${PoppinsNormalVulcan12px}
    width: 249px;
    height: 18px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne63 = styled.img`
    width: 247px;
    height: 1px;
    margin-top: 3px;
    object-fit: cover;
`;

const Audience = styled.div`
    position: absolute;
    width: 346px;
    top: 275px;
    left: 831px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 38px;
`;

const Non = styled.div`
    ${PoppinsNormalVulcan12px}
    width: 346px;
    height: 18px;
    margin-top: 3px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne64 = styled.img`
    width: 344px;
    height: 1px;
    margin-top: 3px;
    object-fit: cover;
`;

const OverlapGroup3 = styled.div`
    width: 1259px;
    height: 140px;
    position: relative;
    margin-top: 55px;
`;

const Rectangle6322 = styled.div`
    position: absolute;
    width: 1259px;
    height: 122px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Analytics2 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 60px;
    height: 22px;
    margin-left: 34.07%;
    margin-right: 32.97%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
    width: 1259px;
    height: 358px;
    position: relative;
    margin-top: 40px;
`;

const Rectangle6323 = styled.div`
    position: absolute;
    width: 1259px;
    height: 340px;
    top: 18px;
    left: 0;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
`;

const Analytics3 = styled.div`
    ${PoppinsSemiboldSemiBoldWhite14px}
    width: 126px;
    height: 22px;
    margin-left: 15.93%;
    margin-right: 14.84%;
    flex: 1;
    text-align: center;
    letter-spacing: 0.06px;
    line-height: 36px;
    white-space: nowrap;
`;

export default ArticlesCrerUnArticle1;
