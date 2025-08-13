import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import all_product from "../../assets/Frontend_Assets/all_product";
function Home() {
  return (
    <>
      <Hero />

      <div className="container py-3">
        <div className="row">
          <h1 className="text-center">POPULAR IN WOMEN</h1>
          <hr className="underline" />
        </div>
        <div className="row">
          {
          all_product.map((product) => (
            product.category === "women" ? (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card 
              product_id={product.id} 
              image={product.image}
              name={product.name}
              price={product.new_price}
              />
            </div>
            ): ""
          )
        )
          }
        </div>
      </div>
    </>
  );
}

export default Home;
