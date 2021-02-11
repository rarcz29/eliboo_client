import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { IdentityLayout, LoginView, RegisterView } from "./views/identity";
import { MainLayout, HomeView, MyListView } from "./views/authenticated";

function App() {
    const [token, setToken] = useState();

    return !token ? (
        <IdentityLayout>
            <Switch>
                <Route path={["/", "/login"]} component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Redirect from="/home" to="/login" />
                <Redirect from="/list" to="/login" />
            </Switch>
        </IdentityLayout>
    ) : (
        <MainLayout>
            <Switch>
                <Route path="/home" component={HomeView} />
                <Route path="/list" component={MyListView} />
            </Switch>
        </MainLayout>
    );
}

export default App;
