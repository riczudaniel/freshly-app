import React from 'react';

function AddButton ({newProduct}) {
  return (
    <button className='bg-blue-300 rounded-full px-3 py-1 mb-2' onClick={newProduct}>Add Product</button>
  );
}

export default AddButton;