import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ROUTING from '../../constants/routing';
import COLORS from '../../styles/colors';

const StyledLink = styled(Link)`
    color: ${COLORS.foreground.secondary};
    font-size: 24px;
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
    justify-content: space-evenly;
    align-items: center;
`;

const Navbar = ({ height, width, setPage }) => {
    return (
        // TODO: Update paths
        <StyledAside style={{ width: width, height: height }}>
            <StyledLink to={ROUTING.home} onClick={setPage('Home')}>
                Home
            </StyledLink>
            <StyledLink to={ROUTING.myList} onClick={setPage('My List')}>
                My list
            </StyledLink>
            <StyledLink to={ROUTING.home} onClick={setPage('Reading Now')}>
                Reading now
            </StyledLink>
            <StyledLink to={ROUTING.home} onClick={setPage('Bookshelves')}>
                Bookshelves
            </StyledLink>
        </StyledAside>
    );
};

export default Navbar;
