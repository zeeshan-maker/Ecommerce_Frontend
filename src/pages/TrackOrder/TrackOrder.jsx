import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackOrder } from "../../services/orderService";
import { toast } from "react-toastify";
import "./TrackOrder.css";

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

    // Define steps
     const steps = [
    { key: "pending", label: "Order Placed", desc: "Your order has been placed" },
    { key: "processing", label: "Processing", desc: "Your order is being prepared" },
    { key: "shipped", label: "Shipped", desc: "Your order is on the way" },
    { key: "delivered", label: "Delivered", desc: "Order delivered successfully" },
    { key: "cancelled", label: "Cancelled", desc: "Your order was cancelled" },
  ];

   // Find index of current order status
  const currentStep = steps.findIndex(step => step.key === order?.orderStatus);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <span className="timeline-title">Order Tracking</span>
        <span className={`status-badge ${order?.orderStatus}`}>
          {order?.orderStatus.charAt(0).toUpperCase() + order?.orderStatus.slice(1)}
        </span>
      </div>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={step.key} className="timeline-step">
            <div
              className={`timeline-icon ${
                index <= currentStep ? "active2" : ""
              }`}
            >
              ✓
            </div>
            <div className="timeline-content">
              <h6 className={index <= currentStep ? "active-text" : ""}>
                {step.label}
              </h6>
              <p>{step.desc}</p>
              {index <= currentStep && (
                <small>{new Date(order?.updatedAt).toLocaleString()}</small>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* {order?.orderStatus === "delivered" && (
        <button className="rate-button">Rate this delivery</button>
      )} */}
    </div>
  );
}

export default TrackOrder;
