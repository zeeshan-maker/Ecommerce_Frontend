import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

function NewCollections({products, loading}) {
     const skeletons = new Array(4).fill(null);
    
  return (
    <div className="container py-lg-4 py-3">
        <div className="row">
            <h2 className="text-center">NEW COLLECTIONS</h2>
             <hr className="underline" />
        </div>
        <div className="row">
            {
               loading
               ? skeletons.map((_,i)=>(
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-3">
                <CardSkeleton />
              </div>
               )): products.map((product)=>(
                    <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-3 ">
                        <Card
                        product_id={product.product_id}
                        name={product.name}
                        image={product.images[0]}
                        price={product.price}
                        old_price={product.old_price}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewCollections
