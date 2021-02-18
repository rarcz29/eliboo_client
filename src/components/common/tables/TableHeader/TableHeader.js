import React from 'react';
import { StyledTableHeader } from './style';

const TableHeader = ({ width, position, children, className }) => {
    return (
        <StyledTableHeader
            width={width}
            className={className}
            position={position}
        >
            {children}
        </StyledTableHeader>
    );
};

export default TableHeader;
