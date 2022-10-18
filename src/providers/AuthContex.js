import { createContext } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [usuario, setUsuario] = useState({
    usuario: 'joão',
    perfil: 'admin',
  });

  return (
    <AuthContext.Provider value={{usuario, setUsuario}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
