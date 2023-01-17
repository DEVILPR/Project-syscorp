import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import LoginForm from "../components/loginform/LoginForm";

const Goutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/customers" component={Customers} />
    </Switch>
  );
};

export default Goutes;
