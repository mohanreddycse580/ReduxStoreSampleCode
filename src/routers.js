import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Show from "./Show";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/show" component={Show} />
      <Route exact path="/" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
