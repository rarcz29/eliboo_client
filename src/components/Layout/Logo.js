import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

const StyledLogo = styled(ReactLogo)`
    width: 100%;
    height: auto;
`;

const StyledDiv = styled.div`
    width: ${(props) => props.width};
`;

const Logo = ({ width }) => {
    return (
        <StyledDiv width={width}>
            <StyledLogo />
        </StyledDiv>
    );
};

export default Logo;
