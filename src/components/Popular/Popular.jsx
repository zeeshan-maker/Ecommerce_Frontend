import "./Popular.css"
import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

function Popular({products, loading}) {
   const skeletons = new Array(4).fill(null);
   return (
   <div className="container py-lg-4 py-md-3 py-2">
        <div className="row">
          <h2 className="text-center">POPULAR IN WOMEN</h2>
          <hr className="underline" />
        </div>
        <div className="row">
          {
            loading
               ? skeletons.map((_,i)=>(
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-md-3 mb-2">
                <CardSkeleton />
              </div>
               )):
          products.map((product) => (
             product.Category.name === "Women" ?(
              <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card 
              product_id={product.product_id} 
              image={product.images[0]}
              name={product.name}
              price={product.price}
              old_price={product.old_price}
              />
              </div>
             ):""
           
          )
        )
          }
        </div>
      </div>
  )
}

export default Popular
