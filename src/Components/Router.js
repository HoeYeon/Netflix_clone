import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
export default () => (
  <Router>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </div>
  </Router>
);
