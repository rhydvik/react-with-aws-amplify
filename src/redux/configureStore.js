import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import initial from './initialState';
import user from './modules/user';

const isEnvProduction = false;

let composeEnhancers = compose;
// For local development, log to Redux devtools excluding certain actions
if (isEnvProduction && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    console.log(`✨✨✨✨ Redux devtools enabled ✨✨✨✨`); // eslint-disable-line
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionsBlacklist: ['@@router/LOCATION_CHANGE'],
  });
}

const configureStore = (initialState = initial) => {
  return createStore(
    combineReducers({
      user,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;
