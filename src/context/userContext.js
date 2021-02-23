import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
    isAuthenticated: false,
    userData: {
        id: 0,
        username: '',
        email: '',
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('SIGN_IN');
            break;
        case 'SIGN_UP':
            console.log('SIGN_UP');
            break;
        case 'LOG_OUT':
            console.log('LOG_OUT');
            break;
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
