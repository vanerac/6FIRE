import React from 'react';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsNormalTundora12px } from '../../styledMixins';

function PlateformeDePaiement() {
    return (
        <PlateformeDePaiement1>
            <PlateformeDePaiement2>Plateforme de paiement</PlateformeDePaiement2>
            <FlexRow>
                <Plateforme>Plateforme</Plateforme>
                <FontAwsomechevronDown src="/img/fontawsome--chevron-down--10@1x.png" />
            </FlexRow>
            <Ligne6 src="/img/ligne-6-47@1x.png" />
        </PlateformeDePaiement1>
    );
}

const PlateformeDePaiement1 = styled.div`
    position: absolute;
    width: 305px;
    top: 62px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const PlateformeDePaiement2 = styled.div`
    ${LatoNormalComet10px}
    width: 281px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow = styled.div`
    height: 19px;
    margin-top: 3px;
    display: flex;
    align-items: center;
    min-width: 292px;
`;

const Plateforme = styled.div`
    ${PoppinsNormalTundora12px}
    width: 153px;
    min-height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const FontAwsomechevronDown = styled.img`
    width: 8px;
    height: 5px;
    margin-left: 131px;
    margin-bottom: 2px;
    object-fit: cover;
`;

const Ligne6 = styled.img`
    width: 304px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

const PlateformeDePaiement3 = styled.div`
    position: absolute;
    width: 305px;
    top: 62px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;
`;

const PlateformeDePaiement4 = styled.div`
    ${LatoNormalComet10px}
    width: 281px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow1 = styled.div`
    height: 19px;
    margin-top: 3px;
    display: flex;
    align-items: center;
    min-width: 292px;
`;

const Plateforme1 = styled.div`
    ${PoppinsNormalTundora12px}
    width: 153px;
    min-height: 19px;
    letter-spacing: 0;
    line-height: 12px;
`;

const FontAwsomechevronDown1 = styled.img`
    width: 8px;
    height: 5px;
    margin-left: 131px;
    margin-bottom: 2px;
    object-fit: cover;
`;

const Ligne61 = styled.img`
    width: 304px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default PlateformeDePaiement;
