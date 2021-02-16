import React from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";

const StyledHeader = styled.header`
    width: 100%;
    height: ${(props) => props.height};
    background-color: ${COLORS.background.lighterSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    font-size: 20px;
`;

const UserElement = styled.p`
    &:hover {
        cursor: pointer;
    }
`;

const Header = ({ currentPage, showUserMenu, setShowUserMenu, height }) => {
    const handleUserElementClick = () => {
        setShowUserMenu(!showUserMenu);
    };

    return (
        <StyledHeader height={height}>
            <p>{currentPage}</p>
            <UserElement onClick={handleUserElementClick}>User</UserElement>
        </StyledHeader>
    );
};

export default Header;
