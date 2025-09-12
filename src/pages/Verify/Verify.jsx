import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyStripe } from '../../services/orderService';
import { useDispatcher } from '../../redux/useDispatcher';
import { toast } from 'react-toastify';

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
                    navigate("/order")
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
    <div>
      Verify 
    </div>
  )
}
