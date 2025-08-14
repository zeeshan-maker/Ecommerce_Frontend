import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetaisPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />\
      <Route path="/product/:product_id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
