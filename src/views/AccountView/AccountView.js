import { UserContext } from 'context/userContext';
import React, { useContext } from 'react';

function AccountView() {
    const userContext = useContext(UserContext);

    return (
        <div>
            <h1>username: {userContext.state.userData.username}</h1>
            <h2>email: {userContext.state.userData.email}</h2>
            <h3>library code: asdfasdfadsf</h3>
        </div>
    );
}

export default AccountView;
