// routesConfig.js
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Dashboard from "./admin/pages/Dashboard";
import AdminRoute from "./components/routes/AdminRoute";
import ShoePage from "./admin/pages/ShoePage";
import UserPage from "./admin/pages/UserPage";
import AdminLayout from "./admin/layouts/AdminLayout";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedRoute>
        <ProductDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> }, // default /admin
      { path: "shoes", element: <ShoePage /> }, // /admin/shoes
      { path: "users", element: <UserPage /> }, // /admin/users
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
];
