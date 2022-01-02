import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

function AppRoutes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {<Home />}
          </Route>
          <Route exact path="/checkout">
            {<Checkout />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default AppRoutes;
