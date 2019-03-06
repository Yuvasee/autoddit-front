import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageAddLink from './PageAddLink';
import { addLink, addLinkFlush } from '../../actions/linkActions';

const mapStateToProps = (state) => ({
  link: state.link,
});

const mapDispatchToProps = dispatch => ({
  addLink: link => dispatch(addLink(link))
});

const PageAddLinkContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageAddLink));

export default PageAddLinkContainer;
