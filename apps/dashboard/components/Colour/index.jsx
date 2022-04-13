import React from 'react';
import styled from 'styled-components';
import {
    HelveticaneueMediumBrightGray234px,
    HelveticaneueNormalBrightGray156px,
} from '../../../../../../../Downloads/AnimaPackage-React-0FVG6/styledMixins';

function Colour(props) {
    const { x665Eff, rgb10294225, className } = props;

    return (
        <Colour1 className={`colour ${className || ''}`}>
            <Base className="base"></Base>
            <X665EFF className="x665-eff">{x665Eff}</X665EFF>
            <RGB10294225 className="rgb-10294225">{rgb10294225}</RGB10294225>
        </Colour1>
    );
}

const Colour1 = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 214px;

    &.colour.colour-1 {
        margin-left: 21px;
    }

    &.colour.colour-2 {
        margin-left: 19px;
    }

    &.colour.colour-4 {
        margin-left: 20px;
    }

    &.colour.colour-5 {
        margin-right: 0.5px;
        flex: 1;
        max-height: 213.50001525878906px;
        margin-bottom: 0;
        min-height: 213.50001525878906px;
        width: unset;
    }

    &.colour.colour-6 {
        margin-right: 0.5px;
        flex: 1;
        max-height: 213.50001525878906px;
        margin-bottom: 0;
        min-height: 213.50001525878906px;
        width: unset;
    }

    &.colour.colour-8 {
        margin-left: 20px;
    }

    &.colour.colour-9 {
        margin-left: 20px;
    }

    &.colour.colour-10 {
        margin-left: 20px;
    }

    &.colour.colour-11 {
        margin-left: 20px;
    }
`;

const Base = styled.div`
    width: 220px;
    height: 130px;
    background-color: var(--whisper);
    border-radius: 8px;
`;

const X665EFF = styled.div`
    ${HelveticaneueMediumBrightGray234px}
    min-height: 30px;
    margin-top: 24px;
    letter-spacing: 0;
    line-height: 31.2px;
    white-space: nowrap;
`;

const RGB10294225 = styled.div`
    ${HelveticaneueNormalBrightGray156px}
    min-height: 20px;
    margin-top: 7px;
    letter-spacing: 0;
    line-height: 27.3px;
    white-space: nowrap;
`;

const Base1 = styled.div`
    .colour.colour-1 & {
        background-color: var(--mystic);
    }
`;

const Base2 = styled.div`
    .colour.colour-2 & {
        background-color: var(--snuff);
    }
`;

const Base3 = styled.div`
    .colour.colour-3 & {
        background-color: var(--shadow-blue);
    }
`;

const Base4 = styled.div`
    .colour.colour-4 & {
        background-color: var(--vulcan);
    }
`;

const Base5 = styled.div`
    .colour.colour-5 & {
        background-color: var(--blue-ribbon);
    }
`;

const Base6 = styled.div`
    .colour.colour-6 & {
        background-color: var(--torch-red);
    }
`;

const Base7 = styled.div`
    .colour.colour-7 & {
        background-color: var(--blue-jeans);
    }
`;

const Base8 = styled.div`
    .colour.colour-8 & {
        background-color: #ffc700;
    }
`;

const Base9 = styled.div`
    .colour.colour-9 & {
        background-color: #f99600;
    }
`;

const Base10 = styled.div`
    .colour.colour-10 & {
        background-color: var(--caribbean-green);
    }
`;

const Base11 = styled.div`
    .colour.colour-11 & {
        background-color: var(--geyser);
    }
`;

export default Colour;
