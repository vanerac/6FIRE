import React from 'react';
import ButtonsBtnTextIcon5 from './ButtonsBtnTextIcon5';
import styled from 'styled-components';
import { LatoNormalComet10px } from '../styledMixins';

function Image1(props) {
    const { imagePrsentation, className, buttonsBtnTextIcon5Props } = props;

    return (
        <Image11 className={`image-1-1 ${className || ''}`}>
            <ImagePrsentation className="image-prsentation">{imagePrsentation}</ImagePrsentation>
            <FlexRow className="flex-row-24">
                <Image12 className="image-1-2" src="/img/image-1-1@1x.png" />
                <ButtonsBtnTextIcon5 className={buttonsBtnTextIcon5Props.className}>
                    {buttonsBtnTextIcon5Props.children}
                </ButtonsBtnTextIcon5>
            </FlexRow>
        </Image11>
    );
}

const Image11 = styled.div`
    position: absolute;
    width: 297px;
    top: 128px;
    left: 39px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 141px;

    &.image-1-1.image-2 {
        top: 127px;
        left: 396px;
    }

    &.image-1-1.nom-5 {
        top: 127px;
        left: 396px;
    }
`;

const ImagePrsentation = styled.div`
    ${LatoNormalComet10px}
    width: 244px;
    min-height: 14px;
    margin-left: 0;
    letter-spacing: 0;
    line-height: 10px;
`;

const FlexRow = styled.div`
    position: relative;
    margin-top: 1px;
    margin-left: -9px;
    display: flex;
    align-items: center;
    min-width: 306px;
`;

const Image12 = styled.img`
    width: 178px;
    height: 138px;
    object-fit: cover;
`;

export default Image1;
