import React from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${COLORS.background.lighterSecondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    font-size: 20px;
`;

const Header = ({ currentPage }) => {
    return (
        <StyledHeader>
            <p>{currentPage}</p>
            <p>User</p>
        </StyledHeader>
    );
};

export default Header;
