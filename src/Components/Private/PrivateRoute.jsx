import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router"; 
import { AuthContext } from "../../Context/AuthContext"; 
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext); 
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-purple-500"></span>
      </div>
    );
  }

  if (!user) {
    // redirect to login, and preserve the current page path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if user is logged in, render the page
  return children;
};

export default PrivateRoute;
