import React from 'react';
import styled from 'styled-components';
import { ArialBoldWhite6px, LatoNormalComet10px } from '../styledMixins';

function PriodeDessai(props) {
    const { on, priodeDessai } = props;

    return (
        <PriodeDessai1>
            <Toggle>
                <ToggleOn>
                    <ON>{on}</ON>
                    <Rectangle658></Rectangle658>
                </ToggleOn>
            </Toggle>
            <PriodeDessai2>{priodeDessai}</PriodeDessai2>
        </PriodeDessai1>
    );
}

const PriodeDessai1 = styled.div`
    position: absolute;
    width: 1191px;
    height: 21px;
    top: 166px;
    left: 39px;
    display: flex;
    align-items: flex-end;
`;

const Toggle = styled.div`
    width: 46px;
    display: flex;
`;

const ToggleOn = styled.div`
    flex: 1;
    display: flex;
    padding: 0 3px;
    justify-content: flex-end;
    align-items: center;
    min-width: 46px;
    background-color: #2699fb;
    border-radius: 40px;
`;

const ON = styled.div`
    ${ArialBoldWhite6px}
    min-height: 8px;
    margin-top: 1px;
    min-width: 11px;
    text-align: right;
    letter-spacing: 0;
    line-height: 6px;
    white-space: nowrap;
`;

const Rectangle658 = styled.div`
    width: 16px;
    height: 17px;
    margin-left: 5px;
    background-color: var(--white);
    border-radius: 40px;
`;

const PriodeDessai2 = styled.div`
    ${LatoNormalComet10px}
    margin-bottom: -4px;
    width: 1133px;
    height: 14px;
    margin-left: 12px;
    margin-right: -2px;
    flex: 1;
    letter-spacing: 0;
    line-height: 10px;
`;

export default PriodeDessai;
