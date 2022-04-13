import React from 'react';
import Type from '../Type';
import styled from 'styled-components';

function Abonnement42(props) {
    const { className, typeProps } = props;

    return (
        <Abonnement className={`abonnement-20 ${className || ''}`}>
            <Type type={typeProps.type} mensuel={typeProps.mensuel} className={typeProps.className} />
        </Abonnement>
    );
}

const Abonnement = styled.div`
    position: absolute;
    width: 187px;
    height: 40px;
    top: 127px;
    left: 39px;
    display: flex;

    &.abonnement-20.abonnement-21 {
        top: 112px;
    }
`;

export default Abonnement42;
