// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
