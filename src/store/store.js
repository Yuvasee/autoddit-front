import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers/AppReducer';
import linkReducer from '../reducers/LinkReducer';

const rootReducer = combineReducers({
  app: appReducer,
  link: linkReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
