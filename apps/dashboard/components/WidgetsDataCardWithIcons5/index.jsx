import React from 'react';
import IconsWidgetIllustration4 from '../IconsWidgetIllustration4';
import styled from 'styled-components';
import { PoppinsNormalComet16px, PoppinsSemiBoldVulcan28px } from '../../styledMixins';

function WidgetsDataCardWithIcons5(props) {
    const { sales, x27632, iconsWidgetIllustration4Props } = props;

    return (
        <WidgetsDataCardWithIcons>
            <Data>
                <Sales>{sales}</Sales>
                <X27632>{x27632}</X27632>
            </Data>
            <IconsWidgetIllustration4
                iconFeatherUserPlusProps={iconsWidgetIllustration4Props.iconFeatherUserPlusProps}
            />
        </WidgetsDataCardWithIcons>
    );
}

const WidgetsDataCardWithIcons = styled.div`
    width: 303px;
    height: 150px;
    position: relative;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 6px;
    box-shadow: 0px 1px 4px #15223214;
`;

const Data = styled.div`
    margin-top: 20px;
    margin-bottom: 55px;
    width: 165px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: calc(100% - 75px);
`;

const Sales = styled.div`
    ${PoppinsNormalComet16px}
    min-height: 25px;
    margin-top: 4px;
    letter-spacing: 0.1px;
    line-height: 16px;
    white-space: nowrap;
`;

const X27632 = styled.div`
    ${PoppinsSemiBoldVulcan28px}
    min-height: 41px;
    margin-top: 13px;
    letter-spacing: 0.12px;
    line-height: 28px;
    white-space: nowrap;
`;

export default WidgetsDataCardWithIcons5;
