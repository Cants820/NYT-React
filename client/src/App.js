import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./components/Main";
import Search from "./components/Search";
import Save from "./components/Save";

const App = () =>
  <Router>
    <div>
      <Main />
      <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' componrnt={Save} />
      </Switch>
    </div>
  </Router>;

export default App;
