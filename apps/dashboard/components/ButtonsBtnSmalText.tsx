import React from 'react';
import IconsChevronRight from './IconsChevronRight';
import styled from 'styled-components';
import { PoppinsMediumBlueRibbon14px } from '../styledMixins';

function ButtonsBtnSmalText(props) {
    const { findOutMore, iconsChevronRightProps } = props;

    return (
        <ButtonsBtnSmalText1>
            <FindOutMore>{findOutMore}</FindOutMore>
            <Icon>
                <IconsChevronRight
                    iconsChevronRight={iconsChevronRightProps.iconsChevronRight}
                    trac407={iconsChevronRightProps.trac407}
                />
            </Icon>
        </ButtonsBtnSmalText1>
    );
}

const ButtonsBtnSmalText1 = styled.div`
    width: 119px;
    height: 20px;
    margin-top: 20px;
    margin-left: 0;
    display: flex;
    justify-content: space-between;
`;

const FindOutMore = styled.div`
    ${PoppinsMediumBlueRibbon14px}
    width: 96px;
    height: 22px;
    letter-spacing: 0;
    line-height: 20px;
    white-space: nowrap;
`;

const Icon = styled.div`
    width: 20px;
    position: relative;
    display: flex;
    justify-content: flex-end;
`;

export default ButtonsBtnSmalText;
