import React from 'react';
import styled from 'styled-components';

const StyledTableHeader = styled.th`
    line-height: 3.3rem;
    text-align: left;
    text-align: ${(props) => props.position};
    width: ${(props) => props.width};
`;

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
