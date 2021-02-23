import React, { createContext, useReducer } from 'react';
import authService from 'services/authService';

export const UserContext = createContext();

const initialState = {
    isLoading: true,
    isAuthenticated: false,
    userData: {
        id: 0,
        username: '',
        email: '',
    },
    errorMessage: '',
};

const login = async (formDataJsonString) => {
    const response = await authService.login(formDataJsonString);

    if (response?.token) {
        const userData = authService.getUserData();
        
        return {
            isLoading: false,
            isAuthenticated: true,
            userData: {
                id: userData.id,
                username: userData.username,
                email: userData.email,
            },
            errorMessage = ''
        };
    } else if (response?.message) {
        let state = initialState;
        state.errorMessage = response.message;
        return state;
    } else {
        let state = initialState;
        state.errorMessage = "Something went wrong";
        return state;
    }
};

const reducer = async (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            login(action.payload);
            break;
        case 'SIGN_UP':
            console.log('SIGN_UP');
            break;
        case 'LOG_OUT':
            authService.logout();
            return initialState;
        case 'CLEAR_MESSAGE':
            let newState = state.errorMessage = '';
            return newState;
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
