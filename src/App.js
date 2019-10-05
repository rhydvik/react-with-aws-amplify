import React from 'react';
import { Authenticator } from 'aws-amplify-react';
import { Provider as ReduxProvider } from 'react-redux';

import Routes from './Routes';

import authenticatorConfig from './config/authenticatorConfig';

import configureStore from './redux/configureStore';

// // TODO to check if values are coming or not
// console.log(authenticatorConfig, 'authenticatorConfig'); // eslint-disable-line

const store = configureStore();

const App = () => (
  <ReduxProvider store={store}>
    <Authenticator amplifyConfig={authenticatorConfig}>
      <Routes />
    </Authenticator>
  </ReduxProvider>
);

export default App;
