import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from 'styles/colors';

export const StyledLink = styled(Link)`
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

    @media (max-width: 1000px) {
        font-size: 1rem;
        margin: 5px;
    }
`;

export const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: row;
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;
