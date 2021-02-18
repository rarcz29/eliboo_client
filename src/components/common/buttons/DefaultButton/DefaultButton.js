import React from 'react';
import COLORS from 'styles/colors';
import Button from '../Button';

function DefaultButton({ type, width, children, className }) {
    return (
        <Button
            className={className}
            type={type}
            width={width}
            height="45px"
            borderRadius="1rem"
            color={COLORS.foreground.primary}
            backgroundColor={COLORS.buttons.blue}
            highlightColor={COLORS.buttons.blueHighlighted}
        >
            {children}
        </Button>
    );
}

export default DefaultButton;
