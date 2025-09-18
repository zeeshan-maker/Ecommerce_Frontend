import Verify from "../../components/Verify/Verify";
import { useEffect } from "react";
import { useNavigate ,useSearchParams} from "react-router-dom";
import { verifyUsers } from "../../services/authService";
import { toast } from 'react-toastify';


function VerifyUser() {
 const navigate = useNavigate();
 const [searchParams] = useSearchParams();
 const token = searchParams.get("token");
    
  const verifyUser = async () => {
    try {
      const res = await verifyUsers(token);
      if (res?.status === 200) {
        toast.success(res.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      toast.error(error?.response?.data.error || "Server Error");
    }
  };

  useEffect(() => {
    verifyUser();
  });

  return <Verify text="User verified successfully!" />;
}

export default VerifyUser;
