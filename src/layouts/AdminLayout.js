// src/layouts/AdminLayout.js
import Sidebar from "../components/Sidebar/Sidebar"

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
