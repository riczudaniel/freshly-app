import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import ListTypes from "./Components/ListTypes"


function App() {
  return (
    <div>
      <h1 className="text-3xl">Freshly</h1>
      <p className='font-bold underline'>Welcome ddddddaaiel!</p>
      <ListTypes/>
      <ProductList/>
    </div>
  );
}

export default App;