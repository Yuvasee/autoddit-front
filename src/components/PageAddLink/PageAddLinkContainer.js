import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageAddLink from './PageAddLink';
import { addLink } from '../../actions/AppActions';

const mapDispatchToProps = dispatch => ({
  addLink: link => dispatch(addLink(link))
});

const PageAddLinkContainer = withRouter(connect(
  null,
  mapDispatchToProps,
)(PageAddLink));

export default PageAddLinkContainer;
