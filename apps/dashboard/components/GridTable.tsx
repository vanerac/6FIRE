import React from 'react';
import styled from 'styled-components';
import { PoppinsMediumMirage12px } from '../styledMixins';

function GridTable(props) {
    const { name1, name2, name3, name4, name5, className } = props;

    return (
        <GridTable1 className={`grid-table-6 ${className || ''}`}>
            <Name className="name-78">{name1}</Name>
            <Name1 className="name-79">{name2}</Name1>
            <Name2 className="name-80">{name3}</Name2>
            <Name3 className="name-81">{name4}</Name3>
            <Name4 className="name-82">{name5}</Name4>
            <Name5 className="name-83">Action</Name5>
        </GridTable1>
    );
}

const GridTable1 = styled.div`
    ${PoppinsMediumMirage12px}
    position: absolute;
    height: 17px;
    top: 24px;
    left: 30px;
    display: flex;
    align-items: flex-end;
    min-width: 1194px;
`;

const Name = styled.div`
    min-height: 19px;
    margin-bottom: -4.5px;
    min-width: 31px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name1 = styled.div`
    min-height: 19px;
    margin-left: 131px;
    margin-bottom: -4.5px;
    min-width: 23px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name2 = styled.div`
    min-height: 19px;
    margin-left: 161px;
    margin-bottom: -4.5px;
    min-width: 38px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name3 = styled.div`
    min-height: 19px;
    margin-left: 159px;
    margin-bottom: -4.5px;
    min-width: 65px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name4 = styled.div`
    min-height: 19px;
    margin-left: 114px;
    margin-bottom: -4.5px;
    min-width: 42px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name5 = styled.div`
    min-height: 19px;
    margin-left: 389px;
    margin-bottom: -4.5px;
    min-width: 41px;
    letter-spacing: 0.09px;
    line-height: 12px;
    white-space: nowrap;
`;

const Name6 = styled.div`
    .grid-table-6.grid-table-7 & {
        min-width: 35px;
    }
`;

const Name7 = styled.div`
    .grid-table-6.grid-table-7 & {
        margin-left: 127px;
        min-width: 64px;
    }
`;

const Name8 = styled.div`
    .grid-table-6.grid-table-7 & {
        margin-left: 120px;
        min-width: 82px;
    }
`;

const Name9 = styled.div`
    .grid-table-6.grid-table-7 & {
        margin-left: 115px;
        min-width: 126px;
    }
`;

const Name10 = styled.div`
    .grid-table-6.grid-table-7 & {
        margin-left: 53px;
        min-width: 140px;
    }
`;

const Name11 = styled.div`
    .grid-table-6.grid-table-7 & {
        margin-left: 291px;
    }
`;

export default GridTable;
