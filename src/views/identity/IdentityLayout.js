import React from "react";
import { Link } from "react-router-dom";

const IdentityLayout = ({ children }) => {
    return (
        <div>
            <h1>IdentityLayout</h1>
            {children}
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
        </div>
    );
};

export default IdentityLayout;
