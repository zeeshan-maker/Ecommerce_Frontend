import { Navigate } from "react-router-dom";
import {useAuthSelector} from "../redux/useSelectors";


const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useAuthSelector();
  
  if (!user) return <Navigate to="/login" />;
  try {
   
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" />;
    }

    return children;
  }
   catch (error) {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
