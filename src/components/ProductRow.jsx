import React from "react";

function ProductRow({product}) {

    // Conditionally style based on inStock property
    const rowStyle = {
    color: product.inStock ? "black" : "red",
  };


    return (
      <tr style={rowStyle}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

  export default ProductRow;