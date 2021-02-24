import ROUTING from 'constants/routing';
import React from 'react';
import { StyledAside, StyledLink } from './style';

const Navbar = ({ height, width, setPage }) => {
    return (
        // TODO: Update paths
        <StyledAside style={{ width: width, height: height }}>
            <StyledLink to={ROUTING.HOME} onClick={() => setPage('Home')}>
                Home
            </StyledLink>
            <StyledLink to={ROUTING.MY_LIST} onClick={() => setPage('My List')}>
                My list
            </StyledLink>
            <StyledLink
                to={ROUTING.READING_NOW}
                onClick={() => setPage('Reading Now')}
            >
                Reading now
            </StyledLink>
            <StyledLink
                to={ROUTING.BOOKSHELVES}
                onClick={() => setPage('Bookshelves')}
            >
                Bookshelves
            </StyledLink>
        </StyledAside>
    );
};

export default Navbar;
