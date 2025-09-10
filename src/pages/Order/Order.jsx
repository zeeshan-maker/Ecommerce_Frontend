import { useEffect, useState } from "react";
import { getUserOrder } from "../../services/orderService"
import { toast } from "react-toastify";

function Order() {
    const [orderData, setOrderData]= useState([]);

    const loadOrderData = async ()=>{
      try {
        const res = await getUserOrder();
        setOrderData(res?.orders)
      } catch (error) {
        toast.error(error?.response?.data?.error)
      }
    }

    useEffect(()=>{
      loadOrderData();
    },[])

  return (
    <div>
      {
        orderData.map((item)=>(
          <p>{item.totalAmount}</p>
        ))
      }
    </div>
  )
}

export default Order
