import { Navigate } from "react-router-dom";
import {useAuthSelector} from "../redux/useSelectors";


const ProtectedRoute = ({ children, role }) => {
    const { token,user } = useAuthSelector();
  
  if (!token) return <Navigate to="/login"  replace/>;
   if (user?.role !== role) return <Navigate to="/" replace />;
    return children
};

export default ProtectedRoute;
