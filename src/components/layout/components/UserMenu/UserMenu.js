import React from 'react';
import { Menu, MenuWrapper } from './style';

const UserMenu = ({
    className,
    top,
    right,
    width,
    height,
    backgroundColor,
    color,
    highlightColor,
    onMouseLeave,
    children,
}) => {
    return (
        <MenuWrapper
            top={top}
            right={right}
            width={width}
            height={height}
            onMouseLeave={onMouseLeave}
        >
            <Menu
                className={className}
                backgroundColor={backgroundColor}
                color={color}
                highlightColor={highlightColor}
                width={width}
                height={height}
            >
                {children}
            </Menu>
        </MenuWrapper>
    );
};

export default UserMenu;
