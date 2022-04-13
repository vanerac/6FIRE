import React from 'react';
import styled from 'styled-components';
import {
    PoppinsNormalShadowBlue12px,
    PoppinsNormalVulcan12px,
    PoppinsSemiBoldVulcan12px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function TooltipPointerLeft2(props) {
    const { bg, titlee, x750, onlineSales } = props;

    return (
        <TooltipPointerLeft>
            <OverlapGroup>
                <Tooltip>
                    <BG src={bg} />
                </Tooltip>
                <Titlee>{titlee}</Titlee>
                <Data>
                    <Sales></Sales>
                    <X750>{x750}</X750>
                    <OnlineSales>{onlineSales}</OnlineSales>
                </Data>
            </OverlapGroup>
        </TooltipPointerLeft>
    );
}

const TooltipPointerLeft = styled.div`
    display: flex;
    padding: 0px 0;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 197px;
`;

const OverlapGroup = styled.div`
    width: 197px;
    height: 60px;
    position: relative;
`;

const Tooltip = styled.div`
    position: absolute;
    width: 197px;
    height: 60px;
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
    width: 242px;
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
    min-width: 174px;
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
    min-width: 24px;
    letter-spacing: 0;
    line-height: 12px;
    white-space: nowrap;
`;

const OnlineSales = styled.div`
    ${PoppinsNormalShadowBlue12px}
    min-height: 19px;
    margin-left: 8px;
    margin-bottom: -0.5px;
    min-width: 130px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

export default TooltipPointerLeft2;
