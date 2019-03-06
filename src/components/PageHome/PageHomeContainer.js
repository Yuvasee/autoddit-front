import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageHome from './PageHome';
import { addLinkFlush, getLinks } from '../../actions/linkActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
  links: state.link.links
});

const mapDispatchToProps = dispatch => ({
  addLinkFlush: () => dispatch(addLinkFlush()),
  getLinks: () => dispatch(getLinks())
});

const PageHomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageHome));

export default PageHomeContainer;
