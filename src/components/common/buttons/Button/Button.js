import React, { useState } from 'react';
import { Circle, StyledButton } from './style';

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
    const [circle, setCircle] = useState(false);

    const handleClick = (event) => {
        onClick && onClick(event);

        const button = event.target;
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left; //x position within the element.
        const y = event.clientY - rect.top;

        setCircle(false);
        setTimeout(() => {
            setCircle(true);
            const circleEffect = button.querySelector(
                '.super-duper-fancy-button-effect'
            );
            if (circleEffect) {
                circleEffect.style.left = `${x}px`;
                circleEffect.style.top = `${y}px`;
            }
        }, 10);
    };

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
            onClick={handleClick}
        >
            {circle && <Circle className="super-duper-fancy-button-effect" />}
            {children}
        </StyledButton>
    );
};

export default Button;
