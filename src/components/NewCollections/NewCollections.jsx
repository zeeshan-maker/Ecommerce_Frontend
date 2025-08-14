import new_collections from "../../assets/Frontend_Assets/new_collections";
import Card from "../Card/Card"

function NewCollections() {
  return (
    <div className="container py-lg-4">
        <div className="row">
            <h1 className="text-center">NEW COLLECTIONS</h1>
             <hr className="underline" />
        </div>
        <div className="row">
            {
                new_collections.map((product)=>(
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-lg-4 mb-md-3 mb-sm-2">
                        <Card
                        product_id={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.new_price}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewCollections
