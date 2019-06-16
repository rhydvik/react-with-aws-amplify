import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      Go to <Link to="/"> Profile </Link>
    </>
  );
};

export default Dashboard;
