import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../common/Spinner';

export default class PageAddLink extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);

    this.state = {
      title: '',
      imageName: ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFile(e) {
    this.setState({
      imageName: e.target.value,
      image: e.target.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, image } = this.state;
    const { user } = this.props;
    this.props.addLink({ title, image, user });
  }

  render() {
    const { addStatus, addError, addResult } = this.props.link;

    return (
      <div>
        <h2>ADD LINK</h2>
        <form
          className="form-add-link"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-label-group">
            <input
              type="text"
              name="title"
              id="inputName"
              className="form-control"
              placeholder="Link title"
              required
              autoFocus
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="inputName">Title</label>
          </div>

          <div className="form-label-group">
            <input
              type="file"
              name="image"
              id="inputName"
              className="form-control"
              required
              value={this.state.imageName}
              onChange={this.handleFile}
            />
            <label htmlFor="inputName">Image</label>
          </div>

          {(!addStatus && !addResult) &&
            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
              Add link
            </button>
          }

          {addStatus &&
            <Spinner />
          }

          {addResult &&
            <div className="alert alert-success" role="alert">
              Link added. <Link to="/">Return to main page</Link>
            </div>
          }

          {addError &&
            <div className="alert alert-danger" role="alert">
              Error: { addError }
            </div>
          }
        </form>
      </div>
    )
  }
}
