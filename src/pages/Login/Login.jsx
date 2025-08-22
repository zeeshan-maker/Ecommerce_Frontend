import "./Login.css";
import user from "../../assets/Frontend_Assets/person.png"
import { Link } from "react-router-dom";
import { useState } from "react";


function Login() {
  const [formData, setFormData]= useState({
    email:"",
    password:""
  })

  const handleChange =(e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  };

  const handleForm = (e)=>{
    e.preventDefault()
    console.log("Form Submitted:", formData);
  }
  return (
        <div className="container">
        <div className="row py-4 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12">
           <div className="login-card p-lg-4 p-2">
            <div className="text-center mb-2"><img src={user} alt="" className="img-fluid" /></div>
             <h3 className="text-center mb-3 login-heading">Welcome Back!!</h3>
            <form onSubmit={handleForm}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                class="form-control mb-3"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                class="form-control mb-3"
                placeholder="Enter your password"
                required
              />
              <p className="text-end text-primary">Forget Password?</p>
              <button type="submit" className="btn btn-login w-100">Login</button>
            </form> 
            <p className="mt-4 text-center">Are you new ? 
                <Link className="text-primary" to="/registration"> Create an Account</Link>
                </p>
           </div>
          </div>
        </div>
      </div>
  );
}

export default Login;
