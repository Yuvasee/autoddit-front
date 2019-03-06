import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';
import { setUser } from '../../actions/AppActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = {
  setUser,
};

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));

export default LoginContainer;
