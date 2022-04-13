import React from 'react';
import styled from 'styled-components';
import { LatoNormalComet10px, PoppinsNormalTundora12px } from '../../styledMixins';

function Devise(props) {
    const { devise, phone, ligne6, className } = props;

    return (
        <Devise1 className={`devise ${className || ''}`}>
            <Devise2 className="devise-1">{devise}</Devise2>
            <Phone className="phone-1">{phone}</Phone>
            <Ligne6 className="ligne-6-13" src={ligne6} />
        </Devise1>
    );
}

const Devise1 = styled.div`
    position: absolute;
    width: 186px;
    top: 62px;
    left: 431px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 40px;

    &.devise.pourcentage-wallet {
        left: 644px;
    }
`;

const Devise2 = styled.div`
    ${LatoNormalComet10px}
    width: 162px;
    min-height: 14px;
    letter-spacing: 0;
    line-height: 10px;
`;

const Phone = styled.div`
    ${PoppinsNormalTundora12px}
    width: 152px;
    min-height: 19px;
    margin-top: 3px;
    letter-spacing: 0;
    line-height: 12px;
`;

const Ligne6 = styled.img`
    width: 186px;
    height: 1px;
    margin-top: 3px;
    margin-left: 0.5px;
    object-fit: cover;
`;

export default Devise;
