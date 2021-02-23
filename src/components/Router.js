import { ROUTING } from 'constants/routing';
import { UserContext } from 'context/userContext';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

function Router() {
    const userContext = useContext(UserContext);

    return (
        <>
            {userContext.state.isAuthenticated ? (
                <MainLayout logout={logout}>
                    <Switch>
                        <Route
                            exact
                            path={[ROUTING.DEFAULT, ROUTING.HOME]}
                            component={HomeView}
                        />
                        <Route path={ROUTING.MY_LIST} component={MyListView} />
                    </Switch>
                </MainLayout>
            ) : (
                <IdentityLayout authenticate={authenticate} register={register}>
                    <Switch>
                        <Route
                            exact
                            path={[ROUTING.DEFAULT, SIGN_IN]}
                            component={LoginView}
                        />
                        <Route
                            path={ROUTING.SIGN_UP}
                            component={RegisterView}
                        />
                        <Redirect
                            from={[ROUTING.HOME, ROUTING.MY_LIST]}
                            to={ROUTING.DEFAULT}
                        />
                    </Switch>
                </IdentityLayout>
            )}
        </>
    );
}

export default Router;
