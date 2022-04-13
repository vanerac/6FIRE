import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalShadowBlue12px, PoppinsNormalVulcan12px, PoppinsSemiBoldVulcan12px } from '../../styledMixins';

function TooltipPointerLeft(props) {
    const { bg, titlee, x7501, onlineSales1, x7502, onlineSales2, x7503, onlineSales3 } = props;

    return (
        <TooltipPointerLeft1>
            <OverlapGroup1>
                <Tooltip>
                    <BG src={bg} />
                </Tooltip>
                <Titlee>{titlee}</Titlee>
                <Data>
                    <Sales></Sales>
                    <X750>{x7501}</X750>
                    <OnlineSales>{onlineSales1}</OnlineSales>
                </Data>
                <Data1>
                    <Sales1></Sales1>
                    <X750>{x7502}</X750>
                    <OnlineSales1>{onlineSales2}</OnlineSales1>
                </Data1>
                <Data2>
                    <Sales2></Sales2>
                    <X7501>{x7503}</X7501>
                    <OnlineSales2>{onlineSales3}</OnlineSales2>
                </Data2>
            </OverlapGroup1>
        </TooltipPointerLeft1>
    );
}

const TooltipPointerLeft1 = styled.div`
    align-self: flex-end;
    margin-left: 7px;
    display: flex;
    padding: 0px 0;
    align-items: flex-start;
    min-width: 163px;
`;

const OverlapGroup1 = styled.div`
    width: 163px;
    height: 106px;
    position: relative;
`;

const Tooltip = styled.div`
    position: absolute;
    width: 163px;
    height: 106px;
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
    width: 207.99990844726562px;
    object-fit: cover;
`;

const Titlee = styled.div`
    ${PoppinsSemiBoldVulcan12px}
    position: absolute;
    top: 12px;
    left: 15px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const Data = styled.div`
    position: absolute;
    height: 17px;
    top: 33px;
    left: 15px;
    display: flex;
    align-items: flex-end;
    min-width: 140px;
`;

const Sales = styled.div`
    width: 8px;
    height: 8px;
    align-self: center;
    margin-top: 1px;
    background-color: var(--geyser);
    border-radius: 6px;
`;

const X750 = styled.div`
    ${PoppinsNormalVulcan12px}
    min-height: 19px;
    margin-left: 4px;
    margin-bottom: -4.5px;
    min-width: 23px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const OnlineSales = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -0.5px;
    min-width: 97px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Data1 = styled.div`
    position: absolute;
    height: 17px;
    top: 56px;
    left: 15px;
    display: flex;
    align-items: flex-end;
    min-width: 92px;
`;

const Sales1 = styled.div`
    width: 8px;
    height: 8px;
    align-self: center;
    margin-top: 1px;
    background-color: var(--blue-jeans);
    border-radius: 6px;
`;

const OnlineSales1 = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -0.5px;
    min-width: 49px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Data2 = styled.div`
    position: absolute;
    height: 17px;
    top: 79px;
    left: 15px;
    display: flex;
    align-items: flex-end;
    min-width: 71px;
`;

const Sales2 = styled.div`
    width: 8px;
    height: 8px;
    align-self: center;
    margin-top: 1px;
    background-color: var(--blue-ribbon-3);
    border-radius: 6px;
`;

const X7501 = styled.div`
    ${PoppinsNormalVulcan12px}
    min-height: 19px;
    margin-left: 4px;
    margin-bottom: -4.5px;
    min-width: 24px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const OnlineSales2 = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -0.5px;
    min-width: 27px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default TooltipPointerLeft;
