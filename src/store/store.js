import { combineReducers, createStore } from 'redux';

import appReducer from '../reducers/AppReducer';

const reducers = combineReducers({
  appReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
