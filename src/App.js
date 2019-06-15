import React from 'react';
import { Authenticator, AwsSignIn, Greetings } from 'aws-amplify-react';

import Routes from './Routes';

import authenticatorConfig from './config/authenticatorConfig';

console.log(authenticatorConfig, 'authenticatorConfig');
console.log(process, process.env);

const App = () => (
  <Authenticator amplifyConfig={authenticatorConfig}>
    <Routes />
  </Authenticator>
);

export default App;
