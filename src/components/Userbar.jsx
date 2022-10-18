import AuthContext from '../providers/AuthContex';
import { useContext } from 'react';
import React from 'react';
import Login from './Login';

const Userbar = () => {

  const AuthDados = useContext(AuthContext);

  return (
    <>
      <hr />
      <p>Usuário: <strong>{AuthDados.usuario}</strong></p>
      <p>Perfil: {AuthDados.perfil}</p>
      <hr />
      <Login />
    </>
  );
};

export default Userbar;
