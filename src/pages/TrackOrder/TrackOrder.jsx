import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackOrder } from "../../services/orderService";
import { toast } from "react-toastify";

function TrackOrder() {
  const { order_id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await trackOrder(order_id);
        setOrder(res?.order);
      } catch (error) {
        toast.error(error?.response?.data?.error || "Unable to track order");
      }
    };
    fetchOrder();
  }, [order_id]);

  if (!order) return <h5 className="text-center mt-5">Loading order...</h5>;

  return (
    <div className="container py-4">
      <h4>Track Order</h4>
      <p><strong>Order ID:</strong> {order.order_id}</p>
     
    </div>
  );
}

export default TrackOrder;
