import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import admin_logo from "../../assets/Admin_Assets/nav-logo.svg";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/Frontend_Assets/menu.png"
import close from "../../assets/Frontend_Assets/close-window.png"
import "./Navbar.css";
import { useState } from "react";
import { useCartSelector , useAuthSelector } from "../../redux/useSelectors";
import { useDispatcher } from "../../redux/useDispatcher";

function Navbar() {
    const { cart } = useCartSelector();
    const { token, user } = useAuthSelector();
    const { logout } = useDispatcher();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    
    const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between">
       <div className="d-flex align-items-center logo">
         {
          token && user?.role ==="admin" ?
          <img src={admin_logo} alt="logo" onClick={()=>navigate("/admin/dashboard")} />
          :<img src={logo} alt="logo" onClick={()=>navigate("/")} />
         }
       </div>
      
         {
          user?.role === "admin" ? "": 
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
         }
       

        <div className="d-flex align-items-center position-relative">
         {
          token?(
          <div className="position-relative">
          <img 
          src={user?.profileImage} 
          alt={user.name}
           onClick={() => setDropdown(!dropdown)}
          className="img-fluid profile-image" />
           {/* Dropdown */}
              {dropdown && (
                <div className="profile-dropdown shadow-sm">
                  <p onClick={() => { setDropdown(false); navigate("/orders"); }}>
                    My Orders
                  </p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
          )
          :<button className="login-button" onClick={()=>navigate("/login")}>Login</button>
         }
          {
            user?.role === "admin" ? "": <>
            <span> <BsCart2 className="fs-3 cart" onClick={()=>navigate("/cart")} /></span>
            <span className="counter">{cart.length}</span>
             </>
          }

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
