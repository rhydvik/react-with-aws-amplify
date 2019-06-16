import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <h1>profile</h1>
      Go to <Link to="/dashboard"> Dashboard </Link>
    </>
  );
};

export default Profile;
