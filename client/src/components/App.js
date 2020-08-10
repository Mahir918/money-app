import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashbord'
import Nav from './navigation/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/dashboard" exact component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
