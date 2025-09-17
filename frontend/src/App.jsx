import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { routes } from "./routesConfig";

const renderRoutes = (routes) =>
  routes.map(({ path, element, children, index }) => (
    <Route key={path || "index"} path={path} element={element} index={index}>
      {children && renderRoutes(children)}
    </Route>
  ));

const App = () => (
  <>
    <Toaster richColors position="top-right" />
    <Routes>{renderRoutes(routes)}</Routes>
  </>
);

export default App;