import { Navigate } from "react-router-dom";
import {useAuthSelector} from "../redux/useSelectors";


const ProtectedRoute = ({ children }) => {
    const { token } = useAuthSelector();
  
  if (!token) return <Navigate to="/login" />;
    return children
};

export default ProtectedRoute;
