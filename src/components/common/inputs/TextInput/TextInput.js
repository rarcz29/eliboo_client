import React from 'react';
import { StyledInput } from './style';

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
    disabled,
    display,
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
            disabled={disabled}
            display={display}
        >
            {children}
        </StyledInput>
    );
};

export default TextInput;
