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
    let newState = {};

    switch (action.type) {
        case 'SET_LOADING':
            newState = state;
            newState.isLoading = true;
            return newState;
        case 'UNSET_LOADING':
            newState = state;
            newState.isLoading = false;
            return newState;
        case 'SIGN_IN':
            return {
                isLoading: false,
                isAuthenticated: true,
                userData: {
                    id: action.payload.id,
                    username: action.payload.username,
                    email: action.payload.email,
                },
                errorMessage: '',
            };
        case 'SIGN_UP':
            // TODO: sing up method
            console.log('SIGN_UP');
            break;
        case 'LOG_OUT':
            return initialState;
        case 'SET_MESSAGE':
            return (state.errorMessage = action.payload);
        case 'CLEAR_MESSAGE':
            return (state.errorMessage = '');
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
