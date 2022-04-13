import React from 'react';
import IDFixe from '../IDFixe';
import ButtonsBtnTextIcon5 from '../ButtonsBtnTextIcon5';
import IDFixe2 from '../IDFixe2';
import Renouvellement from '../Renouvellement';
import styled from 'styled-components';
import {
    LatoNormalComet10px,
    PoppinsNormalTundora12px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Historique(props) {
    const {
        className,
        iDFixe1Props,
        iDFixe2Props,
        iDFixe3Props,
        iDFixe4Props,
        buttonsBtnTextIcon5Props,
        iDFixe21Props,
        renouvellement1Props,
        renouvellement2Props,
        iDFixe22Props,
    } = props;

    return (
        <Historique1 className={`historique ${className || ''}`}>
            <FlexRow className="flex-row-12">
                <FlexCol className="flex-col-11">
                    <FlexRow1 className="flex-row-13">
                        <IdFixeContainer className="id-fixe-container">
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
                        </IdFixeContainer>
                        <IdFixeContainer1 className="id-fixe-container-1">
                            <IDFixe
                                idUser={iDFixe3Props.idUser}
                                number={iDFixe3Props.number}
                                ligne6={iDFixe3Props.ligne6}
                                className={iDFixe3Props.className}
                            />
                            <IDFixe
                                idUser={iDFixe4Props.idUser}
                                number={iDFixe4Props.number}
                                ligne6={iDFixe4Props.ligne6}
                                className={iDFixe4Props.className}
                            />
                        </IdFixeContainer1>
                    </FlexRow1>
                    <FlexRow2 className="flex-row-14">
                        <ButtonsBtnTextIcon5>{buttonsBtnTextIcon5Props.children}</ButtonsBtnTextIcon5>
                        <IDFixe1 className="id-fixe-14">
                            <DateDeRsiliation className="date-de-rsiliation">Date de résiliation</DateDeRsiliation>
                            <Date className="date-2">22/03/2022</Date>
                            <Ligne6 className="ligne-6-4" src="/img/ligne-6-13@1x.png" />
                        </IDFixe1>
                    </FlexRow2>
                </FlexCol>
                <FlexCol1 className="flex-col-12">
                    <IDFixe2 dbut={iDFixe21Props.dbut} date={iDFixe21Props.date} ligne6={iDFixe21Props.ligne6} />
                    <RenouvellementContainer className="renouvellement-container">
                        <Renouvellement renouvellement={renouvellement1Props.renouvellement} />
                        <Renouvellement
                            renouvellement={renouvellement2Props.renouvellement}
                            className={renouvellement2Props.className}
                        />
                    </RenouvellementContainer>
                </FlexCol1>
                <IDFixe2
                    dbut={iDFixe22Props.dbut}
                    date={iDFixe22Props.date}
                    ligne6={iDFixe22Props.ligne6}
                    className={iDFixe22Props.className}
                />
            </FlexRow>
            <Ligne37 className="ligne-37" src="/img/ligne-37-1@1x.png" />
        </Historique1>
    );
}

const Historique1 = styled.div`
    position: absolute;
    width: 1224px;
    top: 53px;
    left: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 176px;
`;

const FlexRow = styled.div`
    height: 157px;
    position: relative;
    margin-left: 1.5px;
    display: flex;
    align-items: flex-start;
    min-width: 1132px;
`;

const FlexCol = styled.div`
    width: 556px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 157px;
`;

const FlexRow1 = styled.div`
    height: 96px;
    margin-left: 0;
    display: flex;
    align-items: flex-start;
    min-width: 556px;
`;

const IdFixeContainer = styled.div`
    width: 268px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 96px;
`;

const IdFixeContainer1 = styled.div`
    width: 268px;
    position: relative;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 96px;
`;

const FlexRow2 = styled.div`
    height: 40px;
    position: relative;
    margin-top: 22px;
    display: flex;
    align-items: center;
    min-width: 341px;
`;

const IDFixe1 = styled.div`
    width: 159px;
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const DateDeRsiliation = styled.div`
    ${LatoNormalComet10px}
    width: 135px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Date = styled.div`
    ${PoppinsNormalTundora12px}
    width: 125px;
    min-height: 19px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 158px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

const FlexCol1 = styled.div`
    width: 268px;
    position: relative;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 91px;
`;

const RenouvellementContainer = styled.div`
    height: 18px;
    position: relative;
    margin-top: 34px;
    display: flex;
    align-items: flex-start;
    min-width: 267px;
`;

const Ligne37 = styled.img`
    width: 1224px;
    height: 1px;
    margin-top: 19px;
    object-fit: cover;
`;

const Historique2 = styled.div`
    .historique & {
        top: 246px;
    }
`;

export default Historique;
