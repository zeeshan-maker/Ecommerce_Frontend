import banner from "../../assets/Frontend_Assets/banner_women.png"
import all_products from "../../assets/Frontend_Assets/all_product"
import Card from "../../components/Card/Card"

function Women() {
  const products = all_products.filter((product)=>product.category === "women")
  return (
      <div>
      <img src={banner} alt="banner" className="img-fluid" />
      <div className="container">
        <div className="row py-4">
          {
            products.map((product)=>(
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-2">
                <Card
                product_id={product.id}
                name={product.name}
                price={product.new_price}
                image={product.image}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Women
