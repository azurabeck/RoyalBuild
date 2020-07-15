import React from 'react';
import { connect } from 'react-redux'
import { Switch, withRouter, Route } from "react-router-dom"
import Navbar from './component-ui/global/navbar'

import Home from './component-pages/home'
import SignIn from './component-pages/signin'
import SignUp from './component-pages/signup'


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>

           <Route exact path='/' component={Home}></Route>
           <Route path='/signin' component={SignIn}></Route>
           <Route path='/signup' component={SignUp}></Route>

        </Switch>
    </div>
  );
}

export default withRouter(connect(null, null)(App));
