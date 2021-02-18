import React from 'react';
import { StyledAvatar, StyledHeader } from './style';

const Header = ({ currentPage, setShowUserMenu, height }) => {
    const handleUserElementClick = () => {
        setShowUserMenu((prev) => !prev);
    };

    return (
        <StyledHeader height={height}>
            <p>{currentPage}</p>
            <StyledAvatar onClick={handleUserElementClick}>R</StyledAvatar>
        </StyledHeader>
    );
};

export default Header;
