import React, { Component } from 'react';
import moment from 'moment';

import './Link.scss';

export default class Link extends Component {
  render() {
    const { image, title, createdAt, user } = this.props.data;
    const submitted = moment(createdAt);

    return (
      <div className="link">
        <div className="voting">
          <div className="vote">
            <i className="fas fa-chevron-circle-up"></i>
          </div>
          <div className="rating">
            42
          </div>
          <div className="vote">
            <i className="fas fa-chevron-circle-down"></i>
          </div>
        </div>
        <div className="image">
          <img src={`${process.env.STATIC_URI}/${image}`} alt="" />
        </div>
        <div className="content">
          <div className="submitted">
            Submitted on {submitted.format('MMM DD, YYYY HH:MM')} by {user}
          </div>
          <div className="title">
            {title}
          </div>
          <div className="comments">
            100500 comments
          </div>
        </div>
      </div>
    )
  }
}
