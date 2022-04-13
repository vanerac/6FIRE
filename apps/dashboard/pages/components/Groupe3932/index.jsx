import React from 'react';
import styled from 'styled-components';
import { PoppinsNormalWhite14px } from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Groupe3932(props) {
    const { children, className } = props;

    return (
        <Groupe393 className={`groupe-393-9 ${className || ''}`}>
            <Text className="text-12">{children}</Text>
        </Groupe393>
    );
}

const Groupe393 = styled.div`
    margin-top: 6px;
    height: 20px;
    margin-left: 12px;
    margin-right: 12px;
    flex: 1;
    display: flex;
`;

const Text = styled.div`
    ${PoppinsNormalWhite14px}
    width: 113px;
    height: 22px;
    letter-spacing: 0.1px;
    line-height: 14px;
    white-space: nowrap;
`;

const Text1 = styled.div`
    ${PoppinsNormalWhite14px}

    .groupe-393-9.groupe-393-10  & {
        width: 111px;
    }
`;

export default Groupe3932;
