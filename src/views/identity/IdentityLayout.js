import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import COLORS from "../../styles/colors";
import Logo from "../../components/layout/Logo";
import Button from "../../components/common/buttons/Button";
import { Link } from "react-router-dom";
import ROUTING from "../../constants/routing";
import Separator from "../../components/common/separators/Separator";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }

    input {
        margin-bottom: 1.8rem;
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

const STATUS = ["Log in", "Sign up"];

const IdentityLayout = ({ children }) => {
    const [linkPath, setLinkPath] = useState(ROUTING.login);
    const [linkText, setLinkText] = useState(STATUS[1]);
    const [submitText, setSubmitText] = useState(STATUS[0]);
    const [errorMessage, setErrorMessage] = useState("test message");

    const resetErrorMessage = () => {
        setErrorMessage("test message changed");
    };

    const handleButtonClick = () => {
        resetErrorMessage();
    };

    const handleLinkClick = () => {
        resetErrorMessage();

        if (linkPath === ROUTING.login) {
            setLinkPath(ROUTING.register);
            setLinkText(STATUS[1]);
            setSubmitText(STATUS[0]);
        } else {
            setLinkPath(ROUTING.login);
            setLinkText(STATUS[0]);
            setSubmitText(STATUS[1]);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo width="90%" />
                <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
                <StyledForm>
                    {children}
                    <Button
                        onClick={handleButtonClick}
                        type="submit"
                        width="80%"
                        height="45px"
                        borderRadius="1.5rem"
                        color={COLORS.foreground.primary}
                        backgroundColor={COLORS.buttons.blue}
                        highlightColor={COLORS.buttons.blueHighlighted}
                    >
                        {submitText}
                    </Button>
                    <Separator text="or" width="80%" />
                    <Link to={linkPath} onClick={handleLinkClick}>
                        {linkText}
                    </Link>
                </StyledForm>
            </Container>
        </>
    );
};

export default IdentityLayout;
