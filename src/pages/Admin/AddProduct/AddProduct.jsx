// src/pages/admin/AddProduct.js
import { useState, useEffect } from "react";
import "./AddProduct.css";
import { fetchCategories } from "../../../services/categoryService";
import { toast } from "react-toastify";
import upload_image from "../../../assets/Admin_Assets/upload_area.svg";
import { addProduct } from '../../../services/productService';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([null, null, null, null]);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [old_price, setOldPrice] = useState("");
  const [stock, setStock] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [files, setFiles] = useState([null, null, null, null]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
    const newPreviews = [...images];
    const newFiles = [...files];
    newPreviews[index] = URL.createObjectURL(file);
    newFiles[index] = file;
    setImages(newPreviews);
    setFiles(newFiles);
  }
  };

  const handleSizeSelect = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleForm =async (e) => {
    e.preventDefault();
    
  if (!productName || !description || !category || !price || !stock) {
    return toast.error("Please fill all required fields");
  }
  try {
    // Prepare form data
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", description);
    formData.append("category_id", category);
    formData.append("price", price);
    formData.append("old_price", old_price);
    formData.append("stock", stock);

    // Add sizes (as JSON so backend can parse easily)
    formData.append("sizes", JSON.stringify(selectedSizes));

    // Add images
    files.forEach((file, index) => {
      if (file) {
        formData.append("images", file); // backend should accept array of files
      }
    });
    const res= await addProduct(formData);
    toast.success(res?.message || "Product added successfully!")

     // Optionally reset form
    setProductName("");
    setDescription("");
    setCategory("");
    setPrice("");
    setStock("");
    setSelectedSizes([]);
    setFiles([null, null, null, null]);
    setImages([null, null, null, null]);

  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
 

  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchCategories();
        setCategories(res?.category);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };
    getCategories();
  }, []);

  return (
    <div className="container py-3">
      <form onSubmit={handleForm}>
        <div className="row">
          <div className="col-12">
            <h5>Add New Product</h5>
          </div>

          <div className="col-lg-8">
            <div className="p-lg-4 p-2 information rounded mb-3">
              <h6>General Information</h6>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Name Product
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description Product
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="mb-1">Size</p>
                  <p className="pick">Pick Available Size</p>
                  <div>
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <span
                        key={size}
                        className={`size-option me-2 ${
                          selectedSizes.includes(size) ? "active" : ""
                        }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-6">
                  <p className="mb-1">Category</p>
                  <p className="pick mb-2">Pick Available Category</p>
                  <div>
                    <select className="form-select"
                     value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                      <option defaultValue="">Select a category</option>
                      {categories?.map((category) => (
                        <option
                          key={category.category_id}
                          value={category.category_id}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-lg-4 p-2 information rounded">
              <p>Pricing And Stock</p>
              <div className="row">
                <div className="col-lg-4">
                  <p className="mb-0 price-and-stock">Base Pricing</p>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="col-lg-4">
                  <p className="mb-0 price-and-stock">Old Pricing</p>
                  <input
                    type="number"
                    className="form-control"
                    value={old_price}
                    onChange={(e) => setOldPrice(e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                  <p className="mb-0 price-and-stock">Stock</p>
                  <input
                    type="number"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="p-lg-4 p-2 information rounded mb-3">
              <h6>Upload Image</h6>
              <div className="row">
                {images.map((img, index) =>
                  index === 0 ? (
                    <div key={index} className="col-12 text-center">
                      <label
                        htmlFor={`fileInput${index}`}
                        className="main-image"
                      >
                        {img ? (
                          <img
                            src={img}
                            alt={`Uploaded ${index}`}
                            className="img-fluid rounded"
                          />
                        ) : (
                          <img
                            src={upload_image}
                            alt=""
                            className="img-fluid rounded"
                          />
                        )}
                      </label>
                      <input
                        type="file"
                        id={`fileInput${index}`}
                        accept="image/*"
                        className="d-none"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </div>
                  ) : (
                    <div key={index} className="col-4 text-center">
                      <label
                        htmlFor={`fileInput${index}`}
                        className="d-block rounded mb-2"
                      >
                        {img ? (
                          <img
                            src={img}
                            alt={`Uploaded ${index}`}
                            className="img-fluid rounded"
                          />
                        ) : (
                          <img
                            src={upload_image}
                            alt=""
                            className="img-fluid rounded"
                          />
                        )}
                      </label>
                      <input
                        type="file"
                        id={`fileInput${index}`}
                        accept="image/*"
                        className="d-none"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </div>
                  )
                )}
                <button type="submit" className="button">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
