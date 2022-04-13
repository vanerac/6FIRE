import React from 'react';
import styled from 'styled-components';

function IconsWidgetIllustration3(props) {
    const { src } = props;

    return (
        <IconsWidgetIllustration>
            <IcRevenues>
                <UsdCircle src={src} />
            </IcRevenues>
        </IconsWidgetIllustration>
    );
}

const IconsWidgetIllustration = styled.div`
    margin-top: -19px;
    width: 62px;
    height: 62px;
    margin-right: 20px;
    display: flex;
`;

const IcRevenues = styled.div`
    flex: 1;
    display: flex;
    padding: 19px 19px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 62px;
    background-color: #21d59b26;
    border-radius: 31px;
`;

const UsdCircle = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

export default IconsWidgetIllustration3;
