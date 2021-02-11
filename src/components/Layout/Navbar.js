import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routing from "../../constants/routing";

const StyledAside = styled.aside`
    height: 100vh;
    width: 450px;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Navbar = () => {
    return (
        // TODO: Update paths
        <StyledAside>
            <Link to={routing.home}>Home</Link>
            <Link to={routing.myList}>My list</Link>
            <Link to={routing.home}>Reading now</Link>
            <Link to={routing.home}>Bookstands</Link>
        </StyledAside>
    );
};

export default Navbar;
