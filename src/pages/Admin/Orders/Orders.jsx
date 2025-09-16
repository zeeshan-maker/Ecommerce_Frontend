import { getAllOrders } from "../../../services/orderService";
import "./Orders.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateOrder } from "../../../services/orderService";
import order_image from "../../../assets/Admin_Assets/order.png"
export default function Orders() {
  const [orders, setOrders] = useState([]);
  const statusOptions = ["pending", "processing", "shipped", "delivered", "cancelled"];

  const fetchAllOrder = async () => {
    try {
      const res = await getAllOrders();
      setOrders(res?.orders);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to fetch orders");
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await updateOrder(orderId, newStatus);
      toast.success(res.message);
      fetchAllOrder();
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllOrder();
  }, []);

  return (
    <div className="container py-lg-4">
      <h4>All Orders</h4>
      {orders.map((order) => (
        <div key={order.order_id} className="row mb-3 p-2 orders mx-2 d-flex align-items-center">
          <div className="col-lg-2">
            <img src={order_image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-4">
            {
              order?.OrderItems.map((product)=>(
               <div key={product.orderItem_id}>
                {product?.Product.name +" "+ product.size}
                </div>
              ))
            }
          </div>
          <div className="col-lg-3">
           <div> <strong>Items: {order?.OrderItems.length}</strong></div>
           <div>Payment Method: {order?.Payment.paymentMethod}</div>
           <div>Payment Status: {order?.Payment.paymentStatus}</div>
            </div>
          <div className="col-lg-1">₹ {order.totalAmount}</div>
          <div className="col-lg-2">
            <select
              value={order.orderStatus}
              onChange={(e) =>
                handleStatusChange(order.order_id, e.target.value)
              }
              className="status-dropdown"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
