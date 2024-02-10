import React from "react";

function SearchBar({products, setProducts}) {
 
  // const handleSelect = e => {  // HandleSelect function is an event handler for the "onChange" event 
  //   setProducts(e.target.value);
  // }; - This assumes that 'products' is a single value rather than an array of products.

  // This line extracts the value of the input field from the event (e) triggered by the onChange event handler
  const handleSelect = (e) => { 
  const searchString = e.target.value;

  if (searchString === ""){

    // check if it's empty, reset to the original full list of products
    setProducts (products);
  }
  else {
 // The filter method creates a new array that contains only the products whose names include the search string. 
  const filteredProducts = products.filter( //  Creates a new array (filteredProducts) that includes only the elements for which the specified condition is true
    (product) => product.name.includes(searchString) // It checks whether the name property of each product includes the searchString. The includes method returns true if the string contains the specified substring.
  );
  // Update
  setProducts(filteredProducts);
};
};

    return (
      <div>
        <input type="text" placeholder="Search products..." onChange={handleSelect}/> 
{/* OnChange - It represents the text that the user has typed into the search input. */}
      </div>
    );
  }
  
  export default SearchBar;