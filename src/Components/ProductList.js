import React, { useState } from 'react';
import Product from './Product';
import NewProductInput from './NewProductInput';
import AddButton from "./AddButton"
import Titles from "./Titles"



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
  
  
  const addNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  }
  
  
    return (
      <div className="flex justify-center items-center">
      <div className='max-w-md'>
      <h1 className='mx-auto text-center max-w-md mb-4 text-2xl'>Product List</h1>
      <div className="text-center">
          <AddButton onClick={() => setShowNewProductInput(true)}></AddButton>
        </div>
      <Titles></Titles>
        
        {showNewProductInput && <NewProductInput onAddProduct={addNewProduct} />}
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