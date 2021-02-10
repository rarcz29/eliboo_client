import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./views/authenticated/MainLayout";
import IdentityLayout from "./views/identity/IdentityLayout";

function App() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login />;
    }

    return (
        <Router>
            <Switch>
                <Route path="/identity">
                    <IdentityLayout />
                </Route>
                <Route path="/">
                    <MainLayout />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
