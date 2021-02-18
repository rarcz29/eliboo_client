import { ReactComponent as ReactLogo } from 'assets/logo.svg';
import styled from 'styled-components';

export const StyledLogo = styled(ReactLogo)`
    width: 100%;
    height: auto;
`;

export const StyledDiv = styled.div`
    width: ${(props) => props.width};
`;
