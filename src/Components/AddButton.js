import React from 'react';

function AddButton ({ onClick}) {
  return (
    <button className='bg-blue-300 rounded-full px-3 py-1 mb-2' onClick={onClick}>Add Product</button>
  )
}

export default AddButton;