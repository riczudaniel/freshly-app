import React from 'react';

function Product ({ name, daysUntil, productGroup }) {
  return (
    <div className='grid grid-cols-3 gap-10 justify-center bg-amber-300 max-w-md rounded-md mb-2 px-3 py-1'>
      <p>{name}</p>
      <p>{daysUntil}</p>
      <p>{productGroup}</p>
    </div>
  );
}

export default Product;