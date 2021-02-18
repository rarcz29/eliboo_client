import React from 'react';
import { StyledTableElement } from './style';

const TableElement = ({ position, children, className }) => {
    return (
        <StyledTableElement className={className} position={position}>
            {children}
        </StyledTableElement>
    );
};

export default TableElement;
