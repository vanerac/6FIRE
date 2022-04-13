import React from 'react';
import IconsNavigationIcon12States from '../IconsNavigationIcon12States';
import styled from 'styled-components';
import { Border1pxSnuff, PoppinsNormalComet14px } from '../../styledMixins';

function ButtonsBtnTextIcon2(props) {
    const { iconsNavigationIcon12StatesProps } = props;

    return (
        <ButtonsBtnTextIcon>
            <Groupe393>
                <OverlapGroup>
                    <IconsNavigationIcon12States
                        src={iconsNavigationIcon12StatesProps.src}
                        className={iconsNavigationIcon12StatesProps.className}
                    />
                </OverlapGroup>
                <Text>Jan, 2019 - Dec, 2019</Text>
            </Groupe393>
        </ButtonsBtnTextIcon>
    );
}

const ButtonsBtnTextIcon = styled.div`
    ${Border1pxSnuff}
    width: 199px;
    display: flex;
    background-color: var(--white);
    border-radius: 4px;
`;

const Groupe393 = styled.div`
    margin-top: 5px;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
    display: flex;
    align-items: flex-end;
    min-width: calc(100% - 24px);
`;

const OverlapGroup = styled.div`
    height: 24px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 24px;
    background-image: url(/img/calendar-event-6@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Text = styled.p`
    ${PoppinsNormalComet14px}
    min-height: 22px;
    margin-left: 8px;
    margin-bottom: -3px;
    min-width: 145px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const ButtonsBtnTextIcon1 = styled.div`
    ${Border1pxSnuff}
    width: 199px;
    display: flex;
    background-color: var(--white);
    border-radius: 4px;
`;

const Groupe3931 = styled.div`
    margin-top: 5px;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
    display: flex;
    align-items: flex-end;
    min-width: calc(100% - 24px);
`;

const OverlapGroup1 = styled.div`
    height: 24px;
    position: relative;
    display: flex;
    align-items: flex-start;
    min-width: 24px;
    background-image: url(/img/calendar-event-6@1x.png);
    background-size: cover;
    background-position: 50% 50%;
`;

const Text1 = styled.p`
    ${PoppinsNormalComet14px}
    min-height: 22px;
    margin-left: 8px;
    margin-bottom: -3px;
    min-width: 145px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

export default ButtonsBtnTextIcon2;
