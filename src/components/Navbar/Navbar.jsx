import { NavLink } from "react-router-dom";
import logo from "../../assets/Frontend_Assets/logo.png";
import person from "../../assets/Frontend_Assets/user-avatar.png"
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
    const { token } = useAuthSelector();
    const { logout } = useDispatcher();
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [dropdown, setDropdown] = useState(false);


     const handleLogout = () => {
      console.log("hii")
    logout();
    setDropdown(false);
    navigate("/login");
  };


  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container d-flex justify-content-between">
       <div className="d-flex align-items-center logo" onClick={()=>navigate("/")}>
         <img src={logo} alt="logo" />
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
          
         {
          token? 
           <div className="position-relative"> 
          <img src={person} alt="person" 
          className="img-fluid me-3 login"
            onClick={() => setDropdown((prev) => !prev)}
          />
           {
           dropdown && (
                <div className="dropdown-menu-custom shadow">
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
            :<button className="logout-button" onClick={()=>navigate("/login")}>Login</button>
         }
            <span> <BsCart2 className="fs-3 cart" onClick={()=>navigate("/cart")} /></span>
            <span className="counter">{cart.length}</span>

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
