import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.borderRadius};
    color: ${(props) => props.color};
    border-width: 0px;
    font-size: ${(props) => props.fontSize || "1rem"};
    background: linear-gradient(
        180deg,
        ${(props) => props.backgroundColor} 0%,
        ${(props) => props.highlightColor} 100%
    );
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    transition: all ease-in-out 0.3s;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        //background-color: ${(props) => props.highlightColor};
        cursor: pointer;
    }
`;

const Button = ({
    type,
    width,
    height,
    borderRadius,
    backgroundColor,
    highlightColor,
    color,
    fontSize,
    onClick,
    children,
}) => {
    return (
        <StyledButton
            type={type}
            width={width}
            height={height}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            highlightColor={highlightColor}
            color={color}
            fontSize={fontSize}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
