import AuthContext from '../providers/AuthContex';
import { useContext } from 'react';
import React from 'react';
import Login from './Login';

const Userbar = () => {

  const AuthDados = useContext(AuthContext);

  return (
    <>
      <hr />
      <p>Usuário: <strong>{AuthDados.usuario.usuario}</strong></p>
      <p>Perfil: {AuthDados.usuario.perfil}</p>
      <hr />
      <Login />
    </>
  );
};

export default Userbar;
