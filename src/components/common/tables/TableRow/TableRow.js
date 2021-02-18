import React from 'react';
import { StyledTr } from './style';

const TableRow = ({ evenColor, children }) => {
    return <StyledTr evenColor={evenColor}>{children}</StyledTr>;
};

export default TableRow;
