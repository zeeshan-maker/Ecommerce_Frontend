import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetaisPage"
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Cart from "../pages/Cart/Cart";
import AdminRoutes from "./AdminRoutes";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import ProtectedRoute from "./ProtectedRoute";
import Order from "../pages/Order/Order";
import Verify from "../pages/Verify/Verify";

const AppRoutes = () => {
   return (
    <Routes>
       {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/product/:product_id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/place-order" 
      element={
         <ProtectedRoute role="customer">
          <PlaceOrder/>
         </ProtectedRoute>
        } 
      />

      <Route path="/orders" 
      element={
         <ProtectedRoute role="customer">
          <Order/>
         </ProtectedRoute>
        } 
      />
      <Route path="/verify" 
      element={
         <ProtectedRoute role="customer">
          <Verify/>
         </ProtectedRoute>
        } 
      />

       {/* Admin only */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      </Routes>
  );
};

export default AppRoutes;
