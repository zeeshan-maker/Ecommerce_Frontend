import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import AddProduct from "../pages/Admin/AddProduct/AddProduct";
import AddCategory from "../pages/Admin/AddCategory/AddCategory"
import Orders from "../pages/Admin/Orders/Orders"
const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

       <Route
        path="/add-product"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

       <Route
        path="/add-category"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddCategory />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <Orders />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AdminRoutes;
