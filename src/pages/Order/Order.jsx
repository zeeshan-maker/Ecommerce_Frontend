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
    <div className="container py-lg-4 py-2">
      <div className="row">
        <h5 className="text-center">My Orders</h5>
      </div>
        {
          orderData.map((order)=>(
            <div key={order.order_id} className="row mb-3 p-2 orders mx-2">
                  <div className="row py-3">
                    <div className="col-lg-6 col-md-6">
                      <h6>#Order ID: {order.order_id}</h6>
                    </div>
                      <div className=" col-lg-6 col-md-6 text-lg-end">
                        <button className="button">Track Order</button>
                      </div>
                  </div>
                  {
                    order?.OrderItems?.map((p,index)=>( 
                    <div key={index} className="row mb-3">
                        <div className="col-lg-2">
                       <img src={p?.Product?.images[0]} alt=""
                      className="img-fluid rounded-2 order-image"  />
                    </div>
                    <div className="col-lg-10 d-flex flex-column justify-content-center">
                      <p className="fw-bold">{p?.Product?.name}</p>
                      <p>
                        <span className="fw-bold">₹{p?.Product?.price} </span>
                        <span> Quantity: {p?.quantity} </span>
                        <span> Size: {p?.size}</span>
                      </p>
                      <p className="mb-0">Payment: {order?.Payment?.paymentMethod}</p>
                    </div>
                    </div>
                  ))
                  }
                  <div className="row">
                    <div className="col-12 text-lg-end">
                      <h6>Total Amount: ₹{order.totalAmount}</h6>
                    </div>
                  </div>

            </div>
          ))
        }
    </div>
  )
}

export default Order
