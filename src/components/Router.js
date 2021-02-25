import ROUTING from 'constants/routing';
import { UserContext } from 'context/userContext';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    BookshelvesView,
    HomeView,
    LoginView,
    MyListView,
    NotFoundView,
    ReadingNowView,
    RegisterView,
} from 'views';
import { IdentityLayout, MainLayout } from './layout';

function Router() {
    const userContext = useContext(UserContext);

    return (
        <>
            {userContext.state.isAuthenticated ? (
                <MainLayout>
                    <Switch>
                        <Route
                            exact
                            path={[ROUTING.DEFAULT, ROUTING.HOME]}
                            component={HomeView}
                        />
                        <Route path={ROUTING.MY_LIST} component={MyListView} />
                        <Route
                            path={ROUTING.READING_NOW}
                            component={ReadingNowView}
                        />
                        <Route
                            path={ROUTING.BOOKSHELVES}
                            component={BookshelvesView}
                        />
                        <Route component={NotFoundView} />
                        <Redirect
                            from={[ROUTING.SIGN_UP, ROUTING.SIGN_IN]}
                            to={ROUTING.DEFAULT}
                        />
                    </Switch>
                </MainLayout>
            ) : (
                <IdentityLayout>
                    <Switch>
                        <Route
                            exact
                            path={[ROUTING.DEFAULT, ROUTING.SIGN_IN]}
                            component={LoginView}
                        />
                        <Route
                            path={ROUTING.SIGN_UP}
                            component={RegisterView}
                        />
                        <Route component={NotFoundView} />
                        <Redirect
                            from={[
                                ROUTING.HOME,
                                ROUTING.MY_LIST,
                                ROUTING.READING_NOW,
                                ROUTING.BOOKSHELVES,
                            ]}
                            to={ROUTING.DEFAULT}
                        />
                    </Switch>
                </IdentityLayout>
            )}
        </>
    );
}

export default Router;
