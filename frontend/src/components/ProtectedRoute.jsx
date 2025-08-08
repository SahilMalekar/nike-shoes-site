import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { user, loading, isLoggingOut } = useAuth();
  const hasToastShown = useRef(false);

  useEffect(() => {
    if (!user && !loading && !isLoggingOut && !hasToastShown.current) {
      toast.error("you must be logged in to access this page");
      hasToastShown.current = true;
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
