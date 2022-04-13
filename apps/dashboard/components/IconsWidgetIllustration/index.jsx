import React from 'react';
import styled from 'styled-components';
import { Border1pxBlueRibbon4 } from '../../styledMixins';

function IconsWidgetIllustration(props) {
    const { src, className } = props;

    return (
        <IconsWidgetIllustration1 className={`icons-widget-illustration ${className || ''}`}>
            <IcSessions className="ic-sessions">
                <Refresh className="refresh" src={src} />
            </IcSessions>
        </IconsWidgetIllustration1>
    );
}

const IconsWidgetIllustration1 = styled.div`
    margin-right: 20px;
    height: 62px;
    width: 62px;
    display: flex;

    &.icons-widget-illustration.icons-widget-illustration-1 {
        margin-top: -19px;
        margin-right: 18px;
    }
`;

const IcSessions = styled.div`
    ${Border1pxBlueRibbon4}
    flex: 1;
    display: flex;
    padding: 18px;
    align-items: flex-start;
    min-width: 62px;
    background-color: var(--blue-ribbon-5);
    border-radius: 31px;
`;

const Refresh = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

export default IconsWidgetIllustration;
