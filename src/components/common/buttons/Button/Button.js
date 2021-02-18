import React from 'react';
import { StyledButton } from './style';

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
