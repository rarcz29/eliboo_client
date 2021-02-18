import React from 'react';
import styled from 'styled-components';

const StyledTableElement = styled.td`
    text-align: ${(props) => props.position};
`;

const TableElement = ({ position, children, className }) => {
    return (
        <StyledTableElement className={className} position={position}>
            {children}
        </StyledTableElement>
    );
};

export default TableElement;
