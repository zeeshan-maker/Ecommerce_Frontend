import Card from "../Card/Card"

function NewCollections({products}) {
    
  return (
    <div className="container py-lg-4">
        <div className="row">
            <h1 className="text-center">NEW COLLECTIONS</h1>
             <hr className="underline" />
        </div>
        <div className="row">
            {
                products.map((product)=>(
                    <div key={product.product_id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-md-3 mb-2 ">
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
