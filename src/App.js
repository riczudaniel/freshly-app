import React, { useState } from 'react';
import ProductList from "./ProductList"

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

 
  const [products, setProducts] = useState(initialProducts);


  function newProduct() {
    const newProduct = {
      name: 'New Product',
      daysUntil: '7 days',
      productGroup: 'Group A',
    };


    setProducts([...products, newProduct]);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Freshly</h1>
      <p className="font-custom">Welcome back Daniel!</p>

      <button onClick={newProduct}>Add Product</button>
      

      <ProductList products={products} addProduct={newProduct} />
    </div>
  );
}

export default App;