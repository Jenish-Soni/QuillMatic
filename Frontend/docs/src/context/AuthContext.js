import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        authService.setAuthHeader(storedToken);
        const response = await authService.checkAuth();
        if (response.token) {
          setToken(response.token);
          localStorage.setItem('token', response.token);
        }
      } catch (error) {
        console.error('Not authenticated:', error);
        // Clear invalid token
        setToken(null);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signup = async(username,password)=>{
    try{
      const response = await authService.signup(username,password);
      return(response.data);
    }catch(e){
      console.log(e);  // Should throw the error instead of just logging
    }
  }
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      if (response.token) {
        localStorage.setItem('token', response.token);
        setToken(response.token);
        authService.setAuthHeader(response.token);
      }
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    authService.removeAuthHeader();
  };

  const value = {
    token,
    loading,
    signup,
    login,
    logout,
    isAuthenticated: !!token // Check if user is authenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 