import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../../domains/dashboard";
import Profiles from "../../domains/profiles";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profiles" component={Profiles} />
  </Switch>
);

export default Routes;
