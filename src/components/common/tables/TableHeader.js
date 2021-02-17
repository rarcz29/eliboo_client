import React from "react";
import styled from "styled-components";

const StyledTableHeader = styled.th`
    line-height: 3.5rem;
    text-align: left;
`;

const TableHeader = ({ children, className }) => {
    return (
        <StyledTableHeader className={className}>{children}</StyledTableHeader>
    );
};

export default TableHeader;
