import CircularProgress from '@material-ui/core/CircularProgress';
import DefaultButton from 'components/common/buttons/DefaultButton';
import ROUTING from 'constants/routing';
import React, { useState } from 'react';
import { COLORS, IdentityGlobalStyle } from 'styles';
import Logo from '../components/Logo';
import {
    Container,
    ErrorMessageContainer,
    StandardLink,
    StyledForm,
    StyledSeparator,
} from './style';

const STATUS = ['Log in', 'Sign up'];

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
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const resetErrorMessage = () => {
        setErrorMessage('');
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
            if (value === '') {
                properData = false;
                setErrorMessage('fields cannot be empty');
            }
        });

        const passwordFields = form.querySelectorAll('input[type=password]');
        const password = passwordFields[0]?.value;

        passwordFields.forEach((field) => {
            if (field.value !== password) {
                properData = false;
                setErrorMessage('passwords are not the same');
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
                        <CircularProgress color="secondary" size="45px" />
                    ) : (
                        <DefaultButton
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
                        </DefaultButton>
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
