import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    userData: {
        id: 0,
        username: '',
        email: '',
    },
    errorMessage: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'UNSET_LOADING':
            return {
                ...state,
                isLoading: false,
            };
        case 'SIGN_IN':
            return {
                isLoading: false,
                isAuthenticated: true,
                userData: {
                    id: action.payload.nameid,
                    username: action.payload.unique_name,
                    email: action.payload.email,
                },
                errorMessage: '',
            };
        case 'LOG_OUT':
            return initialState;
        case 'SET_MESSAGE':
            return {
                ...state,
                errorMessage: action.payload,
            };
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                errorMessage: '',
            };
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
