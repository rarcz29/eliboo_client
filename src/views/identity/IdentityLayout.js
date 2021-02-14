import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import COLORS from "../../styles/colors";
import Logo from "../../components/layout/Logo";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }
`;

const Container = styled.div`
    max-width: 550px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const IdentityLayout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo width="100%" />
                {children}
            </Container>
        </>
    );
};

export default IdentityLayout;
