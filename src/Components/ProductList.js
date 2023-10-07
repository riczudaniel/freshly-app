import React from 'react';
import Product from './Product';


const ProductList = ({ products }) => {
    return (
      <div className="flex justify-center items-center">
      <div>
      <h1 className='mx-auto text-center'>Product List</h1>
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