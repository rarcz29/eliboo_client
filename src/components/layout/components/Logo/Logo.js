import React from 'react';
import { StyledDiv, StyledLogo } from './style';

const Logo = ({ width }) => {
    return (
        <StyledDiv width={width}>
            <StyledLogo />
        </StyledDiv>
    );
};

export default Logo;
