import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import person from "../../assets/Frontend_Assets/user-avatar.png"
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm position-fixed w-100 navbar-container ">
      <div className="container d-flex justify-content-between">
       <div className="d-flex align-items-center">
         <img src={logo} alt="logo" />
        <h3 className="ms-1">SHOPPER</h3>
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
          <img src={person} alt="person" className="img-fluid me-3 login" onClick={()=>navigate("/login")}/>
            <span> <BsCart2 className="fs-3 cart" onClick={()=>navigate("/cart")} /></span>
            <span className="counter">0</span>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
