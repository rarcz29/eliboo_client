import React from "react";
import styled from "styled-components";

// TODO: tmp color and font size
const StyledH1 = styled.h1`
    letter-spacing: 0.03em;
    //font-weight: normal !important;
    color: white;
    font-size: 60px;
`;

const Logo = () => {
    return <StyledH1>eliboo</StyledH1>;
};

export default Logo;
