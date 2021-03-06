import { UserContext } from 'context/userContext';
import React, { useContext } from 'react';
import { StyledAvatar, StyledHeader } from './style';

const Header = ({ currentPage, setShowUserMenu, height }) => {
    const userContext = useContext(UserContext);

    const handleUserElementClick = () => {
        setShowUserMenu((prev) => !prev);
    };

    return (
        <StyledHeader height={height}>
            <p>{currentPage}</p>
            <StyledAvatar onClick={handleUserElementClick}>
                {userContext.state.isLoading ||
                    userContext.state.userData.username.charAt(0)}
            </StyledAvatar>
        </StyledHeader>
    );
};

export default Header;
