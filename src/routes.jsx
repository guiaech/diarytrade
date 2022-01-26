import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route  component={Home}  path="/"  />           
            </Switch>
        </BrowserRouter>
    )
}

export default Router;