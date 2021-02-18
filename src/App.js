import { IdentityLayout, MainLayout } from 'components/layout';
import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { HomeView, LoginView, MyListView, RegisterView } from 'views';
import authService from './services/authService';

function App() {
    const [authenticated, setAuthenticated] = useState(
        authService.isAuthenticated()
    );

    const history = useHistory();

    const authenticate = async (formDataJsonString) => {
        const response = await authService.login(formDataJsonString);

        if (response?.token) {
            setAuthenticated(true);
            history.push('/');
        } else if (response?.message) {
            console.log(response.message);
        } else {
            console.log('no connection');
        }
    };

    const register = async (formDataJsonString) => {
        await authService.register(formDataJsonString);
        history.push('/');
    };

    const logout = () => {
        authService.logout();
        setAuthenticated(false);
        history.push('/');
    };

    return authenticated ? (
        <IdentityLayout authenticate={authenticate} register={register}>
            <Switch>
                <Route exact path={['/', '/login']} component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Redirect from="/home" to="/login" />
                <Redirect from="/list" to="/login" />
            </Switch>
        </IdentityLayout>
    ) : (
        <MainLayout logout={logout}>
            <Switch>
                <Route exact path={['/', '/home']} component={HomeView} />
                <Route path="/list" component={MyListView} />
            </Switch>
        </MainLayout>
    );
}

export default App;
