import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-width: 0px;
    font-size: ${(props) => props.fontSize || "1rem"};
    transition: all ease-in-out 0.3s;

    &:hover {
        background-color: ${(props) => props.highlightColor};
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
