import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/ProtectedRoute";
import { routes } from "./routesConfig";

const App = () => (
  <>
    <Toaster richColors position="top-right" />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </>
);

export default App;
