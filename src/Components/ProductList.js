import React from 'react';
import Product from './Product';


const ProductList = ({ products }) => {
    return (
      <div>
        <h1>Product List</h1>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            daysUntil={product.daysUntil}
            productGroup={product.productGroup}
          />
        ))}
      </div>
    );
  };

export default ProductList