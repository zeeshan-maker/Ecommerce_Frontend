import lock from "../../assets/Frontend_Assets/reset-password.png";
import { useState } from "react";
import { resetPassword } from "../../services/authService";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
     // Reset error
    setError("");
    // Password validation rules
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
     if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
     if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }
     if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain at least one special character (!@#$%^&*).");
      return;
    }
     if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await resetPassword(token,password)
      toast.success(res?.message)
      setPassword("");
      setConfirmPassword("");
      navigation("/login")
    } catch (error) {
      toast.error(error?.response?.data?.error)
    }
  }
  return (
     <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-6 col-12 p-lg-5 p-3 shadow-lg">
          <h4 className="text-center mb-3">Create New Password</h4>
          <div className="text-center">
            <img src={lock} alt="lock" className="mb-3" />
          </div>
          <p className="fphs mb-3">
            Your new password must be different from previous used passwords.
          </p>
           {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              {/* <label htmlFor="password" className="form-label ">Password</label> */}
              <input
               type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
               value={password}
               placeholder="Enter New Password"
                onChange={(e) => setPassword(e.target.value)}
              required
            />
           <span
                  className="input-group-text eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>

             <div className="input-group mb-3">
              {/* <label htmlFor="confirmPassword" className="form-label ">Confirm Password</label> */}
              <input
               type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              placeholder="Confirm New Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
               <span
                  className="input-group-text eye"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <button className="button my-3 w-100">Reset Password</button>
                  
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
