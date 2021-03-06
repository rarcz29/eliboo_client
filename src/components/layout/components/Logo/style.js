import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import styled from 'styled-components';

export const StyledLogo = styled(ReactLogo)`
    width: 100%;
    height: auto;

    @media (max-width: 1000px) {
        width: auto;
        height: 4rem;
    }

    @media (max-width: 500px) {
        width: auto;
        height: 3rem;
    }
`;

export const StyledDiv = styled.div`
    width: ${(props) => props.width};

    @media (max-width: 1000px) {
        width: auto;
        margin: 10px;
    }
`;
