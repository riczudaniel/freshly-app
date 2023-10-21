import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import ListTypes from "./Components/ListTypes"


function App() {

  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h1 className="text-3xl">Freshly</h1>
      <p className='font-bold underline'>Welcome ddddddaaiel!</p>
      <ListTypes handleTypeSelect={handleTypeSelect}/>
      <ProductList selectedType={selectedType}/>
    </div>
  );
}

export default App;