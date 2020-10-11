import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/form";
import Protocolo from "./components/protocolo";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Form} exact />
        <Route path="/protocolo" component={Protocolo} />
      </Switch>
    </Router>
  );
};

export default Routes;
