import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize || "1rem"};
    color: ${(props) => props.color || "black"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const TextProgress = ({ className, width, height, fontSize, color, text }) => {
    const [dot1Visibility, setDot1Visibility] = useState(false);
    const [dot2Visibility, setDot2Visibility] = useState(false);
    const [dot3Visibility, setDot3Visibility] = useState(false);

    useEffect(() => {
        const hooks = [
            [dot1Visibility, setDot1Visibility],
            [dot2Visibility, setDot2Visibility],
            [dot3Visibility, setDot3Visibility],
        ];

        hooks.forEach((hook, index) => {
            setTimeout(() => {
                hook[1](!hook[0]);
            }, 500);
        });
    }, []);

    return (
        <StyledDiv
            className={className}
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
        >
            {text}
            <span style={{ visibility: dot1Visibility }}>.</span>
            <span style={{ visibility: dot2Visibility }}>.</span>
            <span style={{ visibility: dot3Visibility }}>.</span>
        </StyledDiv>
    );
};

export default TextProgress;
