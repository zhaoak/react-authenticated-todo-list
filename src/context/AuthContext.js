import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // vars living in context
  const [userUUID, setUserUUID] = useState(null);

  return <AuthContext.Provider value={{ userUUID, setUserUUID }}>{children}</AuthContext.Provider>;
};

// function to use context; errors if context is requested outside of its provider
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("can't useContext(AuthContext) outside of its provider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
