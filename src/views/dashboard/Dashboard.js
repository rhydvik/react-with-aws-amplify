import React from 'react';
import { Link } from 'aws-amplify-react/dist/AmplifyUI';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      Go to <Link to="/profile"> Profile </Link>
    </>
  );
};

export default Dashboard;
