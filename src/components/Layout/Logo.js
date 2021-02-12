import React from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";

// TODO: tmp color and font size
const StyledH1 = styled.h1`
    letter-spacing: 0.03em;
    font-weight: normal;
    color: ${COLORS.foreground.primary};
    font-size: 60px;
`;

const StyledDiv = styled.div`
    height: 70px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = () => {
    return (
        <StyledDiv>
            <StyledH1>eliboo</StyledH1>
        </StyledDiv>
    );
};

export default Logo;
