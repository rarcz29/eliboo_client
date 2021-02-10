import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainLayout from "./views/authenticated/MainLayout";
import { IdentityLayout, Login, Register } from "./views/identity";

function App() {
    const [token, setToken] = useState();

    return token ? (
        <Router>
            <IdentityLayout>
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </IdentityLayout>
        </Router>
    ) : (
        <Router>
            <Route path="/abcd">
                <h1>ABCD</h1>
            </Route>
        </Router>
    );

    // if (!token) {
    //     return (
    //         <Router>
    //             <IdentityLayout
    //                 children={
    //                     <Switch>
    //                         <Route path="/">
    //                             <Login />
    //                         </Route>
    //                         <Route path="/register">
    //                             <Register />
    //                         </Route>
    //                     </Switch>
    //                 }
    //             />
    //         </Router>
    //     );
    // }

    // return (
    //     <Router>
    //         <Switch>
    //             <Route path="/identity">
    //                 <IdentityLayout />
    //             </Route>
    //             <Route path="/">
    //                 <MainLayout />
    //             </Route>
    //         </Switch>
    //     </Router>
    // );
}

export default App;
