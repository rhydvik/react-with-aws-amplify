import React from 'react';
import { Link } from 'aws-amplify-react/dist/AmplifyUI';

const Profile = () => {
  return (
    <>
      <h1>profile</h1>
      Go to <Link to="/dashboard"> Dashboard </Link>
    </>
  );
};

export default Profile;
