import React from 'react';
import { StyledTable } from './style';

const Table = ({ width, height, children }) => {
    return (
        <StyledTable width={width} height={height}>
            {children}
        </StyledTable>
    );
};

export default Table;
