import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PageHome from './PageHome';
import { setUser } from '../../actions/AppActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = {
  setUser,
};

const PageHomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageHome));

export default PageHomeContainer;
