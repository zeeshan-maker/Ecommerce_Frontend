import "./CardSkeleton.css";

function CardSkeleton() {
  return (
    <div className="card my-card overflow-hidden">
      {/* Image skeleton */}
      <div className="skeleton skeleton-img"></div>

      <div className="p-2">
        {/* Star rating skeleton */}
        <div className="d-flex gap-1 mb-2">
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
          <div className="skeleton skeleton-star"></div>
        </div>

        {/* Product name skeleton */}
        <div className="skeleton skeleton-text mb-2"></div>

        {/* Price skeleton */}
        <div className="d-flex gap-2">
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-old-price"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
