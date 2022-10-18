import React from 'react';

const Login = ({login}) => {
  return (
    <>
      <button onClick={() => login('joao')}>Login</button>
    </>
  );
};

export default Login;
