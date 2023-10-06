import React, { useState } from 'react';
// import ProductList from './ProductList';

function App() {
  const initialProducts = [
    {
      name: 'Eggs',
      daysUntil: '8 days',
      productGroup: 'Animal Prod.',
    },
    {
      name: 'Greek Yoghurt',
      daysUntil: '3 days',
      productGroup: 'Dairy',
    },
  ];

  // Step 1: Use useState to manage the list of products
  const [products, setProducts] = useState(initialProducts);

  // Step 2: Create a function to add a new product
  function newProduct() {
    const newProduct = {
      name: 'New Product',
      daysUntil: '7 days',
      productGroup: 'Group A',
    };

    // Update the state by adding the new product to the existing products
    setProducts([...products, newProduct]);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Freshly</h1>
      <p className="font-custom">Welcome back Daniel!</p>

      <button onClick={newProduct}>Add Product</button>
      
      {/* Step 3: Pass the list of products and addProduct function as props */}
      {/* <ProductList products={products} addProduct={newProduct} /> */}
    </div>
  );
}

export default App;