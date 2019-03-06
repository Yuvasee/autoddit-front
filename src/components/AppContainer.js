import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App';
import { actionType } from '../actions/AppActions';


const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  actionType,
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

export default AppContainer;
