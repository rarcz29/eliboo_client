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
    font-size: ${(props) => props.fontSize || "1rem"};
    transition: border-color ease-in-out 0.3s;

    &:hover,
    &:focus {
        border-color: ${(props) => props.colorPrimary};
    }

    &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.colorSecondary};
        opacity: 1;
    }

    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${(props) => props.colorSecondary};
    }

    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${(props) => props.colorSecondary};
    }
`;

const TextInput = ({
    className,
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
            className={className}
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
