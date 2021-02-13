import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 15px;
    outline: none;
    resize: none;
    background-color: ${(props) => props.backgroundColor || "transparent"};
    color: ${(props) => props.colorPrimary || "black"};
    border: none;
    border-bottom: ${(props) => props.borderWidth || "1px"} solid
        ${(props) => props.colorSecondary || "black"};
    font-size: ${(props) => props.fontSize};
    transition: border-color ease-in-out 0.3s;

    &:hover,
    &:focus {
        border-color: ${(props) => props.colorPrimary};
    }
`;

const TextInput = ({
    width,
    height,
    name,
    type,
    autocomplete,
    placeholder,
    backgroundColor,
    colorPrimary,
    colorSecondary,
    borderWidth,
    fontSize,
    children,
}) => {
    return (
        <StyledInput
            height={height}
            width={width}
            name={name}
            type={type}
            autoComplete={autocomplete}
            placeholder={placeholder}
            backgroundColor={backgroundColor}
            colorPrimary={colorPrimary}
            colorSecondary={colorSecondary}
            borderWidth={borderWidth}
            fontSize={fontSize}
        >
            {children}
        </StyledInput>
    );
};

export default TextInput;
