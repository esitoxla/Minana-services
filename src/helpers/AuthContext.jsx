// authContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create the Auth Context
export const AuthContext = createContext();

// Custom hook to use Auth Context
export const useAuth = () => useContext(AuthContext);

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role") || "guest");
  const isAdmin = role === "admin";

  return (
    <AuthContext.Provider value={{ role, setRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
