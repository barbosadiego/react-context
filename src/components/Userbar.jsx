import React from 'react';
import Login from './Login';

const Userbar = ({usuario, login}) => {
  return (
    <>
      <hr />
      <p>Usuário: <strong>{usuario}</strong></p>
      <hr />
      <Login login={login}/>
    </>
  );
};

export default Userbar;
