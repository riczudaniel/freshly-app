import React from 'react';

function Product ({ name, daysUntil, productGroup }) {
  return (
    <div>
      <p>{name}</p>
      <p>{daysUntil}</p>
      <p>{productGroup}</p>
    </div>
  );
}

export default Product;