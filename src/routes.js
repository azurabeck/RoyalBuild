import React from 'react';
import { connect } from 'react-redux'
import { Switch, withRouter, Route } from "react-router-dom"
import Navbar from './component-ui/global/navbar'

import Home from './component-pages/home'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>

          <Route exact path='/' component={Home}></Route>

        </Switch>
    </div>
  );
}

export default withRouter(connect(null, null)(App));
