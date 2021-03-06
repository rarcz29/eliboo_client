import { UserContextProvider } from 'context/userContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import Router from './Router';

function App() {
    // const authenticate = async (formDataJsonString) => {
    //     const response = await authService.login(formDataJsonString);

    //     if (response?.token) {
    //         setAuthenticated(true);
    //         history.push('/');
    //     } else if (response?.message) {
    //         console.log(response.message);
    //     } else {
    //         console.log('no connection');
    //     }
    // };

    // const register = async (formDataJsonString) => {
    //     await authService.register(formDataJsonString);
    //     history.push('/');
    // };

    // const logout = () => {
    //     authService.logout();
    //     setAuthenticated(false);
    //     history.push('/');
    // };
    // TODO: user routing paths from constants
    return (
        <UserContextProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Router />
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;
