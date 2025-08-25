import './AdminDashboard.css';
import all_product from '../../../assets/Frontend_Assets/all_product';


const AdminDashboard = () => {

 console.log("#######333",all_product)
  if(all_product.length === 0){
    return(
      <h1 className='product-heading'>Data Not Found</h1>
    )
  }

  return (
    <div className="product-list-container">
      <h1 className='product-heading'>All Products List</h1>
      <div className="product-table">
        <div className="product-header">
          <span>Image</span>
          <span>Title</span>
          <span>Price</span>
          <span>Category</span>
          <span>Action</span>
        </div>
        <div className='list'>
        {all_product.map(product => (
          <div className="product-row" key={product.id}>
            <div><img src={product.image[0]} alt={product.name} /></div>
            <div>{product.name}</div>
            <div>₹{product.new_price}</div>
            <div>Category</div>
            <div>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
