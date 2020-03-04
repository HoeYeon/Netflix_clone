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
import Detail from "Routes/Detail";

// tips: Routes내에 js들을 폴더안에 presenter,container형식으로
// 표현했는데 Router가 위치를 알기위해서 index.js는 모든 폴더마다 필수로 있어야함

export default () => (
  <Router>
    <div>
      <Header></Header>
      <Switch>
        <Route
          path="https://hoeyeon.github.io/Netflix_clone/"
          exact
          component={Home}
        ></Route>
        <Route
          path="https://hoeyeon.github.io/Netflix_clone/tv"
          component={TV}
        ></Route>
        <Route
          path="https://hoeyeon.github.io/Netflix_clone/search"
          component={Search}
        ></Route>
        <Route
          path="https://hoeyeon.github.io/Netflix_clone/movie/:id"
          component={Detail}
        ></Route>
        <Route
          path="https://hoeyeon.github.io/Netflix_clone/show/:id"
          component={Detail}
        ></Route>
        <Redirect
          from="*"
          to="https://hoeyeon.github.io/Netflix_clone/"
        ></Redirect>
      </Switch>
    </div>
  </Router>
);
