import "./ForgotPassword.css";
import email_logo from "../../assets/Frontend_Assets/communication.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {forgotPassword} from "../../services/authService"
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit =async(e)=>{
     e.preventDefault();
    try {
      const res = await forgotPassword(email);
      toast.success(res?.message)
      setEmail("")
    } catch (error) {
        toast.error(error?.response?.data?.error)
    }
  }
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 p-lg-5 p-3 shadow-lg text-center">
          <h4 className="text-center mb-3">Forgot Password</h4>
          <div>
            <img src={email_logo} alt="email" className="mb-3" />
          </div>
          <p className="fphf">
            Enter the emaill address associated with your account.
          </p>
          <p className="fphs px-3 mb-3">
            We will email you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
            />
            <button className="button my-3 w-100">Send</button>
            <Link to="/login" className="text-decoration-none text-secondary">Back To Login</Link>
      
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
