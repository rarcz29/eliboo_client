import React from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";
import Avatar from "@material-ui/core/Avatar";

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

const StyledAvatar = styled(Avatar)`
    && {
        background-color: ${COLORS.buttons.blue};
        color: ${COLORS.foreground.primary};
        transition: background-color ease-in-out 0.3s;

        &:hover {
            cursor: pointer;
            background-color: ${COLORS.buttons.blueHighlighted} !important;
        }
    }
`;

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
