import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTING from "../../constants/routing";
import COLORS from "../../styles/colors";

const StyledLink = styled(Link)`
    color: ${COLORS.foreground.secondary};
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-decoration: none;
    transition: color ease-in-out 0.3s;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }

    &:hover {
        color: ${COLORS.foreground.primary};
    }
`;

const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Navbar = ({ height, width }) => {
    return (
        // TODO: Update paths
        <StyledAside style={{ width: width, height: height }}>
            <StyledLink to={ROUTING.home}>Home</StyledLink>
            <StyledLink to={ROUTING.myList}>My list</StyledLink>
            <StyledLink to={ROUTING.home}>Reading now</StyledLink>
            <StyledLink to={ROUTING.home}>Bookstands</StyledLink>
        </StyledAside>
    );
};

export default Navbar;
