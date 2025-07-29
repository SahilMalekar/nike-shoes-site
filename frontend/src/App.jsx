import React from "react";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  </>
);

export default App;
