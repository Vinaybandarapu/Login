// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('gg');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated (e.g., check token in AsyncStorage)
    // If authenticated, set user
    // Otherwise, set user to null
  }, []);

  const login = async (email, password) => {
    // Send login request to server to authenticate user
    // Upon successful authentication, set user with received data
  };

  const logout = async () => {
    // Clear user data (e.g., token) from AsyncStorage
    // Set user to null
  };

  return (
    <AuthContext.Provider value={{ user, loading,setLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
