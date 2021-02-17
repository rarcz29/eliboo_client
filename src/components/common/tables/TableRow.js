import React from "react";
import styled from "styled-components";

const StyledTr = styled.tr`
    line-height: 3.5rem;

    &:nth-child(even) {
        background-color: ${(props) => props.evenColor};
    }
`;

const TableRow = ({ evenColor, children }) => {
    return <StyledTr evenColor={evenColor}>{children}</StyledTr>;
};

export default TableRow;
