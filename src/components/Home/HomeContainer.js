import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from './Home';
import { setUser } from '../../actions/AppActions';

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = {
  setUser,
};

const HomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));

export default HomeContainer;
