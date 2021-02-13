import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    outline: none;
    resize: none;
    background-color: ${(props) => props.backgroundColor || "transparent"};
    border: none;
    border-bottom: 1px solid ${(props) => props.borderColor || "black"};
    transition: border-color ease-in-out 0.3s;
`;

const TextInput = ({ name, type, autocomplete, placeholder, children }) => {
    return (
        <StyledInput
            name={name}
            type={type}
            autoComplete={autocomplete}
            placeholder={placeholder}
        >
            {children}
        </StyledInput>
    );
};

export default TextInput;
