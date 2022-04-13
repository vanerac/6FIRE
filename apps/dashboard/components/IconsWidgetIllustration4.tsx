import React from 'react';
import IconFeatherUserPlus from './IconFeatherUserPlus';
import styled from 'styled-components';

function IconsWidgetIllustration4(props) {
    const { iconFeatherUserPlusProps } = props;

    return (
        <IconsWidgetIllustration>
            <IcUsers>
                <IconFeatherUserPlus
                    trac463={iconFeatherUserPlusProps.trac463}
                    trac464={iconFeatherUserPlusProps.trac464}
                    trac465={iconFeatherUserPlusProps.trac465}
                    trac466={iconFeatherUserPlusProps.trac466}
                />
            </IcUsers>
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

const IcUsers = styled.div`
    flex: 1;
    width: 62px;
    position: relative;
    display: flex;
    background-color: #21d59b27;
    border-radius: 31px;
`;

export default IconsWidgetIllustration4;
