import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Offers from "../../components/Offers/Offers";
import NewCollections from "../../components/NewCollections/NewCollections";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/productService";
import { toast } from "react-toastify";

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
        const fetchAllProduct = async ()=>{
            try {
              const res= await getAllProduct();
              setProducts(res?.products)
            } catch (error) {
              toast.error(error?.response?.data.message)
            }
            finally {
        setLoading(false);
      }
          }

      useEffect(()=>{
          fetchAllProduct()
      },[])

  return (
    <>
      <Hero />
      <Popular products={products} loading={loading}/> 
      <Offers/>
      <NewCollections products={products} loading={loading}/>
    </>
  );
}

export default Home;
