import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize || "1rem"};
    color: ${(props) => props.color || "black"};
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.03rem;
`;

const TextProgress = ({ className, width, height, fontSize, color, text }) => {
    return (
        <StyledDiv
            className={className}
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
        >
            {text}
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </StyledDiv>
    );
};

export default TextProgress;
