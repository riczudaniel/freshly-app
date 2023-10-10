import React from 'react';

function Product ({ name, daysUntil, productGroup }) {
  return (
    <div className='grid grid-cols-3 gap-12 justify-center bg-amber-300 max-w-md rounded-md mb-2 px-4 py-1'>
      <p>{name}</p>
      <p>{daysUntil}</p>
      <p>{productGroup}</p>
    </div>
  );
}

export default Product;