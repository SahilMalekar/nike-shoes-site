import React, { useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const hasToastShown = useRef(false);

  useEffect(() => {
    if (!user && !hasToastShown.current) {
      toast.error("you must be logged in to access this page");
      hasToastShown.current = true;
    }
  }, [user]);

  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
