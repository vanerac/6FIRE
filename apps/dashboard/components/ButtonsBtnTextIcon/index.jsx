import React from 'react';
import IconsNavigationIcon12States from '../IconsNavigationIcon12States';
import styled from 'styled-components';
import { Border1pxSnuff, PoppinsNormalComet14px } from '../../styledMixins';

function ButtonsBtnTextIcon(props) {
    const { text, className, iconsNavigationIcon12StatesProps } = props;

    return (
        <ButtonsBtnTextIcon1 className={`buttons-btn-text-icon ${className || ''}`}>
            <Groupe393 className="groupe-393">
                <IconsNavigationIcon12States
                    src={iconsNavigationIcon12StatesProps.src}
                    className={iconsNavigationIcon12StatesProps.className}
                />
                <Text className="text-1">{text}</Text>
            </Groupe393>
        </ButtonsBtnTextIcon1>
    );
}

const ButtonsBtnTextIcon1 = styled.div`
    ${Border1pxSnuff}
    width: 102px;
    height: 36px;
    margin-top: 17px;
    margin-left: 0;
    display: flex;
    background-color: var(--white);
    border-radius: 4px;

    &.buttons-btn-text-icon.buttons-btn-text-icon-1 {
        width: 99px;
        align-self: flex-start;
        margin-left: 165px;
        margin-top: unset;
    }
`;

const Groupe393 = styled.div`
    margin-top: 5px;
    height: 24px;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
    position: relative;
    display: flex;
    align-items: flex-end;
    min-width: calc(100% - 24px);
`;

const Text = styled.div`
    ${PoppinsNormalComet14px}
    min-height: 22px;
    margin-left: 8px;
    margin-bottom: -3px;
    min-width: 48px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Text1 = styled.div`
    ${PoppinsNormalComet14px}

    .buttons-btn-text-icon.buttons-btn-text-icon-1  & {
        min-width: 45px;
    }
`;

export default ButtonsBtnTextIcon;
