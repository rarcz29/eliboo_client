import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { IdentityLayout, LoginView, RegisterView } from "./views/identity";
import { MainLayout, HomeView, MyListView } from "./views/authenticated";
import authService from "./services/authService";

function App() {
    const [authenticated, setAuthenticated] = useState(
        authService.isAuthenticated()
    );

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
