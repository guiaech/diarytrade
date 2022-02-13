import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PageUser from "./pages/PageUser";
import Home from "./pages/Home";



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={PageUser} path="/Login" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;