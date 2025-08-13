import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between">
        <img src={logo} alt="logo" />
        <div className="d-flex">
          <NavLink to="/"
            className={({ isActive }) => `nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>

          <NavLink to="/collection"
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Collection
          </NavLink>

          <NavLink to="/contact"
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}` }
          >
            Contact
          </NavLink>
        </div>

        <div>
            <span className="me-3"><IoPersonOutline className="fs-3" /></span>
            <span ><BsCart2 className="fs-3" /></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
