import React, { Component } from 'react';
import { Redirect, Switch, Route} from 'react-router-dom';

import Fallback from '../Fallback/Fallback';
import Login from '../Login/LoginContainer';
import Home from '../Home/HomeContainer';

import './App.scss';

export default class App extends Component {
  render() {
    const { user, location} = this.props;

    if (!user && location.pathname !== '/login') {
      return (
        <Redirect to={{
          pathname: "/login",
          state: { from: location }
        }}/>
      );
    }

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={Fallback} />
        </Switch>
      </div>
    );

  }
}
