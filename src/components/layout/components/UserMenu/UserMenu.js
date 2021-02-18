import React from 'react';
import { Menu } from './style';

const UserMenu = ({
    className,
    top,
    right,
    width,
    height,
    backgroundColor,
    color,
    highlightColor,
    children,
}) => {
    return (
        <Menu
            className={className + ' click-outside-element'}
            top={top}
            right={right}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            color={color}
            highlightColor={highlightColor}
        >
            {children}
        </Menu>
    );
};

export default UserMenu;
