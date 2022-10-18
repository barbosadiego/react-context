import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider ({ children }){

  const AuthDados = {
    usuario: 'joão',
    perfil: 'admin',
  }

  return (
    <AuthContext.Provider value={AuthDados}>
      { children }
    </AuthContext.Provider>
  )
};

export default AuthContext;
