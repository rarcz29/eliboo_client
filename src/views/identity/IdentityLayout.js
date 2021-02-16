import React, { useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../../components/layout/Logo";
import Button from "../../components/common/buttons/Button";
import { Link } from "react-router-dom";
import ROUTING from "../../constants/routing";
import Separator from "../../components/common/separators/Separator";
import TextProgress from "../../components/common/progress/TextProgress";
import { COLORS, IdentityGlobalStyle } from "../../styles";

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

const IdentityLayout = ({ authenticate, register, children }) => {
    const [linkPath, setLinkPath] = useState(
        window.location.pathname === ROUTING.register
            ? ROUTING.login
            : ROUTING.register
    );
    const [linkText, setLinkText] = useState(
        linkPath === ROUTING.register ? STATUS[1] : STATUS[0]
    );
    const [submitText, setSubmitText] = useState(
        linkPath === ROUTING.register ? STATUS[0] : STATUS[1]
    );
    const [errorMessage, setErrorMessage] = useState("test message");
    const [loading, setLoading] = useState(false);

    const resetErrorMessage = () => {
        setErrorMessage("");
    };

    const handleButtonClick = () => {
        resetErrorMessage();
    };

    const handleLinkClick = () => {
        resetErrorMessage();

        if (linkPath === ROUTING.register) {
            setLinkPath(ROUTING.login);
            setLinkText(STATUS[0]);
            setSubmitText(STATUS[1]);
        } else {
            setLinkPath(ROUTING.register);
            setLinkText(STATUS[1]);
            setSubmitText(STATUS[0]);
        }
    };

    const validateForm = (form) => {
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        let properData = true;

        Object.values(plainFormData).forEach((value) => {
            if (value === "") {
                properData = false;
                setErrorMessage("fields cannot be empty");
            }
        });

        const passwordFields = form.querySelectorAll("input[type=password]");
        const password = passwordFields[0]?.value;

        passwordFields.forEach((field) => {
            if (field.value !== password) {
                properData = false;
                setErrorMessage("passwords are not the same");
            }
        });

        return properData;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const properData = validateForm(form);

        if (properData) {
            const formDataJsonString = JSON.stringify(plainFormData);
            setLoading(true);
            authenticate(formDataJsonString).then(() => setLoading(false));
        }
    };

    return (
        <>
            <IdentityGlobalStyle />
            <Container>
                <Logo width="90%" />
                <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
                <StyledForm onSubmit={handleSubmit} noValidate={loading}>
                    {children}
                    {loading ? (
                        <TextProgress
                            height="45px"
                            text="Wait"
                            color={COLORS.foreground.primary}
                        />
                    ) : (
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
                    )}
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
