import React from "react";

const RegisterView = () => {
    return (
        <form>
            <input type="text" placeholder="username"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input type="password" placeholder="confirm password"></input>
            <input type="submit"></input>
        </form>
    );
};

export default RegisterView;
