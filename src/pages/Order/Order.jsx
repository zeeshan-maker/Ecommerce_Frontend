import { useEffect, useState } from "react";
import { getUserOrder } from "../../services/orderService"
import { toast } from "react-toastify";
import "./Order.css"
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
    <div className="container py-lg-4">
      <div className="row">
        <h5>My Orders</h5>
      </div>
        {
          orderData.map((order)=>(
            <div key={order.order_id} className="row mb-3 p-lg-2 order-item">
                <div className="col-lg-6 col-md-6">
                  {
                    order?.OrderItems?.map((p,index)=>( 
                   <div key={index} className="row">
                    <div className="col-3">
                       <img  src={p?.Product?.images[0]} alt=""
                    className="img-fluid mb-3"  />
                    </div>
                    <div className="col-9">
                      <p className="fw-bold">{p?.Product?.name}</p>
                      <p>
                        <span>₹{p?.Product?.price} </span>
                        <span> Quantity: {p?.quantity} </span>
                        <span> Size: {p?.size}</span>
                      </p>
                      <p >Date: Wed Jul 10 2024</p>
                      <p>Payment: {order?.Payment?.paymentMethod}</p>
                    </div>
                   </div>
                  ))
                  }
                </div>
                <div className="col-lg-3 col-md-3 d-flex align-items-center">
                  <p>Out for Delivery</p>
                </div>
                <div className="col-lg-3 col-md-3 d-flex align-items-center">
                  <p>Track Order</p>
                </div>
            </div>
          ))
        }
    </div>
  )
}

export default Order
