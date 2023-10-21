import React, { useState } from 'react';
import freezer from "../images/freezer.png";
import fridge from "../images/fridge.png";
import pantry from "../images/pantry.png";

function ListTypes({ handleTypeSelect }) {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className='flex my-4 justify-center'>
      {[
        { name: 'Freezer', image: freezer },
        { name: 'Fridge', image: fridge },
        { name: 'Pantry', image: pantry },
      ].map((type, index) => (
        <img
          key={index}
          src={type.image}
          className={`w-28 mx-2 p-2 rounded-md ${selectedType === type.name ? 'bg-gray-300' : ''}`}
          onClick={() => {
            handleTypeSelect(type.name);
            setSelectedType(type.name);
          }}
          alt={type.name}
        />
      ))}
    </div>
  );
}

export default ListTypes;