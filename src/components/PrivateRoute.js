import React from 'react';
import { Navigate } from 'react-router-dom';

// Example of a fake authentication function
const isAuthenticated = () => {
  // Implement your authentication logic here
  return localStorage.getItem('authToken') !== null;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
