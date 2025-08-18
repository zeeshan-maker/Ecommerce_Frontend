import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import person from "../../assets/Frontend_Assets/user-avatar.png"
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/Frontend_Assets/menu.png"
import close from "../../assets/Frontend_Assets/close-window.png"
import "./Navbar.css";
import { useState } from "react";


function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between">
       <div className="d-flex align-items-center logo">
         <img src={logo} alt="logo" onClick={()=>navigate("/")} />
        <h3 className="ms-1 shopper">SHOPPER</h3>
       </div>
        <div className={`d-flex nav-item-container ${show ? "show" : ""}`}>
          <NavLink 
          to="/"
          onClick={() => setShow(false)}
          className={({ isActive }) => `nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Shop
          </NavLink>

          <NavLink to="/men"
           onClick={() => setShow(false)}
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}`}
          >
            Men
          </NavLink>

          <NavLink to="/women"
           onClick={() => setShow(false)}
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}` }
          >
            Women
          </NavLink>

           <NavLink to="/kids"
            onClick={() => setShow(false)}
           className={({ isActive }) =>`nav-link mx-3 ${isActive ? "active" : ""}` }
          >
            Kids
          </NavLink>
        </div>

        <div className="d-flex">
          <img src={person} alt="person" className="img-fluid me-3 login" onClick={()=>navigate("/login")}/>
            <span> <BsCart2 className="fs-3 cart" onClick={()=>navigate("/cart")} /></span>
            <span className="counter">0</span>

           <div className="menu">
            {
              show ?<img src={close} alt="close" onClick={()=>setShow(false)} />:
               <img src={menu} alt="menu" onClick={()=>setShow(true)} />
            }
          
    
           </div>
            
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
