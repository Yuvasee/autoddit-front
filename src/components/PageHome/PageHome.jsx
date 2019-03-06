import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '../Link/Link';

export default class PageHome extends Component {
  componentWillMount() {
    this.props.getLinks();
  }

  componentDidMount() {
    this.props.addLinkFlush();
  }

  render() {
    const { links } = this.props;

    console.log(links);

    return (
      <div>
        <div>
          <RouterLink to="/add-link">Add link</RouterLink>
        </div>
        {links.map((link) => (
          <Link data={link} key={link.image} />
        ))}
      </div>
    )
  }
}
