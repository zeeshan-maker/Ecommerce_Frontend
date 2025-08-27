import user from "../../assets/Frontend_Assets/person.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";


function Registration() {
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   // 🔹 Handle form submit
  const handleForm = async (e) => {
    try {
      e.preventDefault();
      const res = await registerUser(formData)
      toast.success(res.message)
      setFormData({
        name: "",
      email: "",
      phone:"",
      password: "",
      })
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message)
    }


  };

  return (
    <div className="container">
        <div className="row py-4 d-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12">
           <div className="login-card p-lg-4 p-2">
            <div className="text-center mb-2"><img src={user} alt="" className="img-fluid" /></div>
             <h3 className="text-center mb-3 login-heading">Create Account</h3>
            <form onSubmit={handleForm}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Enter your email"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Enter your phone number"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="Enter your password"
              />
      
              <button type="submit" className="btn btn-login w-100">Sign Up</button>
            </form> 
            <p className="mt-4 text-center">Already have an account ?  
                <Link className="text-primary" to="/login"> Login</Link>
                </p>
           </div>
          </div>
        </div>
      </div>
  )
}

export default Registration
