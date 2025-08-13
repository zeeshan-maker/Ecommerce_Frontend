import "./Popular.css"
import Card from "../Card/Card";
import all_product from "../../assets/Frontend_Assets/all_product";
function Popular() {
    const womens_product = all_product.filter((product)=> product.category === "women")
  return (
   <div className="container py-lg-4 py-md-3 py-2">
        <div className="row">
          <h1 className="text-center">POPULAR IN WOMEN</h1>
          <hr className="underline" />
        </div>
        <div className="row">
          {
          womens_product.slice(0, 4).map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card 
              product_id={product.id} 
              image={product.image}
              name={product.name}
              price={product.new_price}
              />
            </div>
           
          )
        )
          }
        </div>
      </div>
  )
}

export default Popular
