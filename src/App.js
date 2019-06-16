import React from 'react';
import { Authenticator } from 'aws-amplify-react';

import Routes from './Routes';

import authenticatorConfig from './config/authenticatorConfig';

// TODO to check if values are coming or not
console.log(authenticatorConfig, 'authenticatorConfig'); // eslint-disable-line

const App = () => (
  <Authenticator amplifyConfig={authenticatorConfig}>
    <Routes />
  </Authenticator>
);

export default App;
