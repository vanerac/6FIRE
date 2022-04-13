import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalWhite12px } from '../styledMixins';

function ButtonsBtnTextIcon5(props) {
    const { children, className } = props;

    return (
        <ButtonsBtnTextIcon className={`buttons-btn-text-icon-27 ${className || ''}`}>
            <Groupe393 className="groupe-393-8">
                <Text className="text-11">{children}</Text>
            </Groupe393>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    width: 160px;
    height: 29px;
    display: flex;
    background-color: var(--buttercup);
    border-radius: 4px;

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-29 {
        width: 90px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-30 {
        width: 104px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-31 {
        width: 104px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-32 {
        width: 104px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-33 {
        width: 104px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-34 {
        align-self: flex-end;
        width: 136px;
        background-color: var(--web-orange);
    }

    &.buttons-btn-text-icon-27.buttons-btn-text-icon-35 {
        width: 93px;
        margin-left: 24px;
        margin-bottom: 5px;
        background-color: var(--banana);
    }
`;

const Groupe393 = styled.div`
    margin-top: 6px;
    height: 17px;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
    display: flex;
`;

const Text = styled.div`
    ${PoppinsNormalWhite12px}
    width: 138px;
    height: 19px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Text1 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-29  & {
        width: 68px;
    }
`;

const Text2 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-30  & {
        width: 82px;
    }
`;

const Text3 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-31  & {
        width: 82px;
    }
`;

const Text4 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-32  & {
        width: 82px;
    }
`;

const Text5 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-33  & {
        width: 82px;
    }
`;

const Text6 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-34  & {
        width: 114px;
    }
`;

const Text7 = styled.div`
    ${PoppinsNormalWhite12px}

    .buttons-btn-text-icon-27.buttons-btn-text-icon-35  & {
        width: 71px;
    }
`;

export default ButtonsBtnTextIcon5;
