import CircularProgress from '@material-ui/core/CircularProgress';
import DefaultButton from 'components/common/buttons/DefaultButton';
import ROUTING from 'constants/routing';
import { UserContext } from 'context/userContext';
import React, { useContext, useState } from 'react';
import authService from 'services/authService';
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

const IdentityLayout = ({ children }) => {
    const userContext = useContext(UserContext);
    const [linkPath, setLinkPath] = useState(
        window.location.pathname === ROUTING.SIGN_UP
            ? ROUTING.SIGN_IN
            : ROUTING.SIGN_UP
    );
    const [linkText, setLinkText] = useState(
        linkPath === ROUTING.SIGN_UP ? STATUS[1] : STATUS[0]
    );
    const [submitText, setSubmitText] = useState(
        linkPath === ROUTING.SIGN_UP ? STATUS[0] : STATUS[1]
    );
    const [errorMessage, setErrorMessage] = useState('');

    const resetErrorMessage = () => {
        setErrorMessage('');
    };

    const handleButtonClick = () => {
        resetErrorMessage();
    };

    const handleLinkClick = () => {
        resetErrorMessage();

        if (linkPath === ROUTING.SIGN_UP) {
            setLinkPath(ROUTING.SIGN_IN);
            setLinkText(STATUS[0]);
            setSubmitText(STATUS[1]);
        } else {
            setLinkPath(ROUTING.SIGN_UP);
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

    const authenticate = async (formDataJsonString) => {
        userContext.dispatch({ type: 'SET_LOADING' });
        const response = await authService.login(formDataJsonString);

        if (response?.token) {
            const userData = authService.getUserData();
            userContext.dispatch({ type: 'SIGN_IN', payload: userData });
            console.log(userContext.state);
        } else {
            userContext.dispatch({
                type: 'SET_MESSAGE',
                payload: 'Something went wrong',
            });
        }

        userContext.dispatch({ type: 'UNSET_LOADING' });
    };

    const register = async (formDataJsonString) => {
        userContext.dispatch({ type: 'SET_LOADING' });
        const response = await authService.register(formDataJsonString);

        // if (response?.token) {
        //     const userData = authService.getUserData();
        //     userContext.dispatch({ type: 'SIGN_IN', payload: userData });
        // } else {
        //     userContext.dispatch({
        //         type: 'SET_MESSAGE',
        //         payload: 'Something went wrong',
        //     });
        // }

        userContext.dispatch({ type: 'UNSET_LOADING' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const properData = validateForm(form);

        if (properData) {
            const formDataJsonString = JSON.stringify(plainFormData);

            if (submitText === STATUS[0]) {
                authenticate(formDataJsonString);
            } else if (submitText === STATUS[1]) {
                register(formDataJsonString);
            }
        }
    };

    return (
        <>
            <IdentityGlobalStyle />
            <Container>
                <Logo width="90%" />
                <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
                <StyledForm onSubmit={handleSubmit}>
                    {children}
                    {userContext.state.isLoading ? (
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
