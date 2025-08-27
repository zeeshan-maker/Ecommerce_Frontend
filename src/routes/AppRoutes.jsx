import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetaisPage"
import Men from "../pages/Men/Men";
import Women from "../pages/Women/Women";
import Kids from "../pages/Kids/Kids";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Cart from "../pages/Cart/Cart";

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
      <Route path="/registration" element={<Registration />} />

      {/* User Routes */}
      <Route path="/cart" element={<Cart />} />
       
    </Routes>
  );
};

export default AppRoutes;
