import React, { useState } from 'react';
import Product from './Product';
import NewProductInput from './NewProductInput';
import AddButton from "./AddButton"



const ProductList = () => {
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
  const [showNewProductInput, setShowNewProductInput] = useState(false);
  
  
  function newProduct() {
    const newProduct = {
      name: 'Test Product',
      daysUntil: '7 days',
      productGroup: 'Group Test',
    };
  
  
    setProducts([...products, newProduct]);
  }
  
  
    return (
      <div className="flex justify-center items-center">
      <div className='max-w-md'>
      <h1 className='mx-auto text-center'>Product List</h1>
      <div className="text-center">
          <AddButton newProduct={newProduct} onClick={() => setShowNewProductInput(true)} ></AddButton>
        </div>
        
        {showNewProductInput && <NewProductInput />}
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            daysUntil={product.daysUntil}
            productGroup={product.productGroup}
          />
        ))}
      </div>
    </div>
    );
  };

export default ProductList