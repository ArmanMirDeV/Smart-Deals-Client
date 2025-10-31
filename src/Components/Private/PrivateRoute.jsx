import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import AuthProvider from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();

  // optional: show loading spinner while checking auth state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-purple-500"></span>
      </div>
    );
  }

  // if user not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // else show the protected page
  return children;
};

export default PrivateRoute;
