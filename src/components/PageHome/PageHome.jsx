import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageHome extends Component {
  render() {
    return (
      <div>
        <Link to="/add-link">Add link</Link>
      </div>
    )
  }
}
