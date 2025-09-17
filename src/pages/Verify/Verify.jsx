import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyStripe } from '../../services/orderService';
import { useDispatcher } from '../../redux/useDispatcher';
import { toast } from 'react-toastify';
import success_icon from "../../assets/Frontend_Assets/success.png";
import "./Verify.css";

export default function Verify() {
    const navigate = useNavigate();
    const { clearCart } = useDispatcher();
    const [searchParams] = useSearchParams();
    const success = searchParams.get('success');
    const order_id = searchParams.get('order_id');

    const verifyPaymet = async () =>{
            try {
                const res= await verifyStripe({success, order_id});
                if(res?.success){
                    clearCart();
                     setTimeout(() => {
                    navigate("/orders");
                }, 10000);
                }else{
                   navigate("/cart") 
                }
            } catch (error) {
                toast.error(error?.response?.data.error || "Server Error")
            }
    }

    useEffect(()=>{
        verifyPaymet();
    })

  return (
    <div className="d-flex align-items-center justify-content-center verify">
      <div className='d-flex flex-column align-items-center'>
          <div className='img-container'>
            <img src={success_icon} alt="" className='img-fluid w-75' />
          </div>
        <h3 className='text-center'>Payment successful.</h3>
      </div>
    </div>
  )
}
