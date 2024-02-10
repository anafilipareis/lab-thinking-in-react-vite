import React, { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const containerStyle = {
    textAlign: "center", // Center align the content
    marginTop: "20px",   // Add some top margin for spacing
  };

  const tableContainerStyle = {
    display: "inline-block",
    marginTop: "20px", 
  };



  return (
    <div style={containerStyle}>
      <h1>IronStore</h1>
        <SearchBar products={products}  setProducts={setProducts}/>
        <div style={tableContainerStyle}>
        <ProductTable products={products} />
        </div>
    </div>
  );
}

export default ProductsPage;

