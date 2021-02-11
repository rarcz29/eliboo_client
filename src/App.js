import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IdentityLayout, LoginView, RegisterView } from "./views/identity";
import { MainLayout, HomeView, MyListView } from "./views/authenticated";

function App() {
    const [token, setToken] = useState();

    return !token ? (
        <Router>
            <IdentityLayout>
                <Switch>
                    <Route path="/">
                        <LoginView />
                    </Route>
                    <Route path="/register">
                        <RegisterView />
                    </Route>
                </Switch>
            </IdentityLayout>
        </Router>
    ) : (
        <Router>
            <MainLayout>
                <Switch>
                    <Route path="/home">
                        <HomeView />
                    </Route>
                    <Route path="/list">
                        <MyListView />
                    </Route>
                </Switch>
            </MainLayout>
        </Router>
    );
}

export default App;
