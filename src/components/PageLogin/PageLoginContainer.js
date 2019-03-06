import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageLogin from './PageLogin';
import { setUser } from '../../actions/AppActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = {
  setUser,
};

const PageLoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLogin));

export default PageLoginContainer;
