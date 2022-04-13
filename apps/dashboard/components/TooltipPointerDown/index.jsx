import React from 'react';
import styled from 'styled-components';
import {
    PoppinsNormalShadowBlue12px,
    PoppinsNormalVulcan12px,
    PoppinsSemiBoldVulcan12px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function TooltipPointerDown(props) {
    const { bg, titlee, x7501, onlineSales1, x7502, onlineSales2 } = props;

    return (
        <TooltipPointerDown1>
            <OverlapGroup>
                <TooltipBG>
                    <BG src={bg} />
                </TooltipBG>
                <Titlee>{titlee}</Titlee>
                <DataKey>
                    <Data>
                        <Sales></Sales>
                        <X750>{x7501}</X750>
                        <OnlineSales>{onlineSales1}</OnlineSales>
                    </Data>
                    <Data1>
                        <Sales1></Sales1>
                        <X7501>{x7502}</X7501>
                        <OnlineSales1>{onlineSales2}</OnlineSales1>
                    </Data1>
                </DataKey>
            </OverlapGroup>
        </TooltipPointerDown1>
    );
}

const TooltipPointerDown1 = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
    min-width: 119px;
`;

const OverlapGroup = styled.div`
    width: 119px;
    height: 88px;
    position: relative;
    margin-bottom: 0;
`;

const TooltipBG = styled.div`
    position: absolute;
    width: 119px;
    height: 88px;
    top: 0;
    left: 0;
    display: flex;
`;

const BG = styled.img`
    margin-top: -17.5px;
    margin-left: -22.5px;
    margin-right: -22.5px;
    flex: 1;
    margin-bottom: -27.5px;
    width: 163.9998016357422px;
    object-fit: cover;
`;

const Titlee = styled.div`
    ${PoppinsSemiBoldVulcan12px}
    position: absolute;
    top: 12px;
    left: 10px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const DataKey = styled.div`
    position: absolute;
    width: 99px;
    height: 40px;
    top: 33px;
    left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Data = styled.div`
    height: 17px;
    display: flex;
    align-items: flex-end;
    min-width: 98px;
`;

const Sales = styled.div`
    width: 8px;
    height: 8px;
    align-self: center;
    margin-top: 1px;
    background-color: var(--blue-ribbon-3);
    border-radius: 6px;
`;

const X750 = styled.div`
    ${PoppinsNormalVulcan12px}
    min-height: 19px;
    margin-left: 4px;
    margin-bottom: -4.5px;
    min-width: 31px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const OnlineSales = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -4.5px;
    min-width: 47px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const Data1 = styled.div`
    height: 17px;
    display: flex;
    align-items: flex-end;
    min-width: 101px;
`;

const Sales1 = styled.div`
    width: 8px;
    height: 8px;
    align-self: center;
    margin-top: 1px;
    background-color: #29cb97;
    border-radius: 6px;
`;

const X7501 = styled.div`
    ${PoppinsNormalVulcan12px}
    min-height: 19px;
    margin-left: 4px;
    margin-bottom: -4.5px;
    min-width: 30px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const OnlineSales1 = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -4.5px;
    min-width: 51px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

export default TooltipPointerDown;
