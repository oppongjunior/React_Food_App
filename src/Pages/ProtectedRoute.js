import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  if (localStorage.getItem("currentUser")) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
