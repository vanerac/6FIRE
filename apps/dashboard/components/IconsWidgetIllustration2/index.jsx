import React from 'react';
import IconFeatherUserPlus from '../IconFeatherUserPlus';
import styled from 'styled-components';
import { Border1pxBlueRibbon4 } from '../../styledMixins';

function IconsWidgetIllustration2(props) {
    const { iconFeatherUserPlusProps } = props;

    return (
        <IconsWidgetIllustration>
            <IcBounceRate>
                <IconFeatherUserPlus
                    trac463={iconFeatherUserPlusProps.trac463}
                    trac464={iconFeatherUserPlusProps.trac464}
                    trac465={iconFeatherUserPlusProps.trac465}
                    trac466={iconFeatherUserPlusProps.trac466}
                />
            </IcBounceRate>
        </IconsWidgetIllustration>
    );
}

const IconsWidgetIllustration = styled.div`
    margin-top: -19px;
    width: 62px;
    height: 62px;
    margin-right: 21px;
    display: flex;
`;

const IcBounceRate = styled.div`
    ${Border1pxBlueRibbon4}
    flex: 1;
    width: 62px;
    position: relative;
    display: flex;
    background-color: var(--blue-ribbon-5);
    border-radius: 31px;
`;

export default IconsWidgetIllustration2;
