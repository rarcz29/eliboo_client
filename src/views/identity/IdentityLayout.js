import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import COLORS from "../../styles/colors";
import Logo from "../../components/layout/Logo";
import Button from "../../components/common/buttons/Button";
import { Link } from "react-router-dom";
import ROUTING from "../../constants/routing";
import Separator from "../../components/common/separators/Separator";
import API_ENDPOINTS from "../../constants/apiEndpoints";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${COLORS.background.darkerSecondary};
    }

    input {
        margin-bottom: 1.6rem;
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

const StyledSeparator = styled(Separator)`
    margin: 1rem 0;
`;

const StandardLink = styled(Link)`
    color: ${COLORS.foreground.primary};
    transition: color ease-in-out 0.3s;
    text-underline-offset: 0.2rem;

    &:hover {
        color: ${COLORS.foreground.secondary};
    }
`;

const STATUS = ["Log in", "Sign up"];

const IdentityLayout = ({ children }) => {
    const [linkPath, setLinkPath] = useState(ROUTING.register);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);

        fetch(API_ENDPOINTS.REGISTER_URL, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            method: "POST",
            body: formDataJsonString,
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Logo width="90%" />
                <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
                <StyledForm onSubmit={handleSubmit}>
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
                </StyledForm>
                <StyledSeparator text="or" width="80%" />
                <StandardLink to={linkPath} onClick={handleLinkClick}>
                    {linkText}
                </StandardLink>
            </Container>
        </>
    );
};

export default IdentityLayout;
