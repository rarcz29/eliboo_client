import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import COLORS from "../../styles/colors";
import Logo from "../../components/layout/Logo";
import Button from "../../components/common/buttons/Button";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }
`;

const flexCenterStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    ${flexCenterStyle}
    max-width: 550px;
    min-height: 100vh;
    margin: 0 auto;
`;

const StyledForm = styled.form`
    ${flexCenterStyle}
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ErrorMessageContainer = styled.div`
    ${flexCenterStyle}
    width: 100%;
    height: 2.5rem;
    color: red;
`;

const IdentityLayout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo width="90%" />
                <ErrorMessageContainer>error message</ErrorMessageContainer>
                <StyledForm>
                    {children}
                    <Button
                        type="submit"
                        width="80%"
                        height="45px"
                        borderRadius="1.5rem"
                        color={COLORS.foreground.primary}
                        backgroundColor={COLORS.buttons.blue}
                        highlightColor={COLORS.buttons.blueHighlighted}
                    >
                        Log in
                    </Button>
                    <Link to="/register">Sign up</Link>
                </StyledForm>
            </Container>
        </>
    );
};

export default IdentityLayout;
