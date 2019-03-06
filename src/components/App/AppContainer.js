import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App';
import { setUser } from '../../actions/AppActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = {
  setUser,
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

export default AppContainer;
