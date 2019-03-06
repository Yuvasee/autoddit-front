import React, { Component } from 'react';
import { Redirect, Switch, Route} from 'react-router-dom';

import PageFallback from '../PageFallback/PageFallback';
import PageLogin from '../PageLogin/PageLoginContainer';
import PageHome from '../PageHome/PageHomeContainer';
import PageAddLink from '../PageAddLink/PageAddLinkContainer';

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
      <div className="container-fluid">
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/add-link" component={PageAddLink} />
            <Route component={PageFallback} />
          </Switch>
        </div>
      </div>
    );

  }
}
