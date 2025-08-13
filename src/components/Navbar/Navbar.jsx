import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between">
       <div className="d-flex align-items-center">
         <img src={logo} alt="logo" />
        <h2>SHOPPER</h2>
       </div>
        <div className="d-flex">
          <NavLink to="/"
            className={({ isActive }) => `nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Shop
          </NavLink>

          <NavLink to="/men"
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Men
          </NavLink>

          <NavLink to="/women"
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}` }
          >
            Women
          </NavLink>

           <NavLink to="/kids"
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}` }
          >
            Kids
          </NavLink>
        </div>

        <div className="d-flex">
            <span className="me-3"><IoPersonOutline className="fs-3" /></span>
            <span> <BsCart2 className="fs-3" /></span>
            <span className="counter">0</span>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
