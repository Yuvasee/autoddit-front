import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSignin = this.handleSignin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: ''
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSignin(e) {
    e.preventDefault();

    this.props.setUser(this.state.name);
  }

  render() {
    if (this.props.user) {
      return (
        <Redirect to={this.props.location.state.from} />
      );
    }

    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">
                Sign In
              </h5>
              <form className="form-signin" onSubmit={this.handleSignin}>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Name"
                    required
                    autoFocus
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="inputName">Name</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
