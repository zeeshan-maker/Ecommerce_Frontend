import banner from "../../assets/Frontend_Assets/banner_women.png";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";
import { getAllProduct } from "../../services/productService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const skeletons = new Array(8).fill(null);

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const res = await getAllProduct();
        setProducts(res?.products);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProduct();
  }, []);
  return (
    <div>
      <img src={banner} alt="banner" className="img-fluid" />
      <div className="container">
        <div className="row py-4">
          {loading
            ? skeletons.map((_, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-md-3 mb-2"
                >
                  <CardSkeleton />
                </div>
              ))
            : products.map((product) =>
                product.Category.name === "Women" ? (
                  <div
                    key={product.product_id}
                    className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-2"
                  >
                    <Card
                      product_id={product.product_id}
                      name={product.name}
                      price={product.price}
                      old_price={product.old_price}
                      image={product.images[0]}
                    />
                  </div>
                ) : (
                  ""
                )
              )}
        </div>
      </div>
    </div>
  );
}

export default Women;
