import React from 'react';
import AuthContext from '../providers/AuthContex';
import { useContext } from 'react';

const Login = () => {
  const AuthDados = useContext(AuthContext);
  // console.log(AuthDados);

  return (
    <>
      <button
        onClick={() =>
          AuthDados.setUsuario({ usuario: 'diego', perfil: 'user' })
        }
      >
        Login
      </button>
    </>
  );
};

export default Login;
