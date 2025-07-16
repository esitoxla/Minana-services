import React, {  useContext, useState } from 'react'
import { AuthContext } from './contextSetUp';


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true); // Toggle manually or based on logic

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
