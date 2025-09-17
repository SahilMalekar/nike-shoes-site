import React, { useEffect, useRef } from "react";

import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user = {token , role}, loading } = useAuth();
  const token = user?.token
  const role = user?.user?.role
  const hasToastShown = useRef(false);


  useEffect(() => {
    if (!loading && user && role !== "admin" && !hasToastShown.current) {
      toast.error("Access denied! Admins only.");
      hasToastShown.current = true;
    }
  }, [role, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  

  if (role !== "admin") {
    return <Navigate to="/" replace />; // redirect normal users to home
  }

  return children;
};

export default AdminRoute;