import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Save from "./components/Save";
import Result from "./components/Result";



const App = () =>
  <Router>
    <div className="container">
        <Main />
        <Switch>
          <div>
          <Route exact path="/" component= {Search} />
          <Route exact path="/api/save" component={Save} />
          <Route exact path="/api/result" component={Result} />
          <Route exact path="/api/search" component= {Search} />
          </div>
        </Switch>
    </div>
  </Router>;

export default App;
