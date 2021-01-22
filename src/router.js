import React from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";

import * as History from "history";

import Layout from "./layout";

import Prime from "./math/prime/index";
import Iban from "./iban";

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || "",
});

const NotFound = () => <p>Page Not Found</p>;
const Public = () => (
  <p>
    Browse to the different pages via the menu{" "}
    <i
      className="fa fa-arrow-right"
      style={{
        transform: "rotate(-45deg)",
      }}
    ></i>
  </p>
);

function MyRouter(props) {
  return (
    <Layout>
      <Switch>
        <Route exact path="/prime" component={Prime} props={props} />
        <Route exact path="/iban" component={Iban} props={props} />
        <Route path="/" component={Public} props={props} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Layout>
  );
}

const WrappedRouter = withRouter(MyRouter);

export default () => (
  <Router history={history}>
    <WrappedRouter />
  </Router>
);
