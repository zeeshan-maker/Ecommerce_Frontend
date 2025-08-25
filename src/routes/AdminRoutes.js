import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
        }
      />

    </Routes>
  );
};

export default AdminRoutes;
