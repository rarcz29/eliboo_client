import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ItemContainer = ({ height, width, backgroundColor, children }) => {
    return (
        <StyledDiv
            style={{
                height: height,
                width: width,
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </StyledDiv>
    );
};

export default ItemContainer;
