import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const Table = ({ width, height, children }) => {
    return (
        <StyledTable width={width} height={height}>
            {children}
        </StyledTable>
    );
};

export default Table;
