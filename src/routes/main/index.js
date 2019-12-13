import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Auth = lazy(() => import("../../containers/Auth"));
const Password = lazy(() => import("../../containers/ForgotPassword"));

const App = () => (
  <Suspense fallback={"loading"}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forgot-password" component={Password} />
      <Route path="/" component={Auth} />
    </Switch>
  </Suspense>
);

export default App;
