import React, { useState } from 'react';
import Product from './Product';



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
      <div>
      <h1 className='mx-auto text-center'>Product List</h1>
      <div className="text-center"> {/* Center the button */}
          <button onClick={newProduct}>Add Product</button>
        </div>
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