import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { IdentityLayout, LoginView, RegisterView } from "./views/identity";
import { MainLayout, HomeView, MyListView } from "./views/authenticated";
import authService from "./services/authService";

function App() {
    const [authenticated, setAuthenticated] = useState(
        authService.isAuthenticated()
    );

    const history = useHistory();

    const authenticate = async (formDataJsonString) => {
        await authService.login(formDataJsonString);
        setAuthenticated(true);
        history.push("/");
    };

    const register = async (formDataJsonString) => {
        await authService.register(formDataJsonString);
        history.push("/");
    };

    const logout = () => {
        authService.logout();
        setAuthenticated(false);
        history.push("/");
    };

    return !authenticated ? (
        <IdentityLayout authenticate={() => setAuthenticated(true)}>
            <Switch>
                <Route exact path={["/", "/login"]} component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Redirect from="/home" to="/login" />
                <Redirect from="/list" to="/login" />
            </Switch>
        </IdentityLayout>
    ) : (
        <MainLayout
            logout={() => {
                authService.logout();
                setAuthenticated(false);
            }}
        >
            <Switch>
                <Route exact path={["/", "/home"]} component={HomeView} />
                <Route path="/list" component={MyListView} />
            </Switch>
        </MainLayout>
    );
}

export default App;
