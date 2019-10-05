import React, { useState } from 'react';

import { connect } from 'react-redux';
import { updateProfile } from '../../redux/modules/user';

type Props = {
  user: Object,
  dispatch: Function,
};

const Profile = ({ user, dispatch }: Props) => {
  const [name, setName] = useState('');

  const updateRedux = () => {
    dispatch(updateProfile({ name }));
  };

  return (
    <>
      <input onChange={event => setName(event.target.value)} /> <br />
      <button onClick={updateRedux}>Update Redux</button>
      <h3>Type and submit to see value here: {user && user.name}</h3>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user,
});

export default connect(mapStateToProps)(Profile);
