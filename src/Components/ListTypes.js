import React, { useState } from 'react';
import freezer from "../images/freezer.png"
import fridge from "../images/fridge.png"
import pantry from "../images/pantry.png"

function ListTypes ({ handleTypeSelect }) {
    const [selectedType, setSelectedType] = useState(null);

    const types = [
        { name: 'Freezer', image: freezer },
        { name: 'Fridge', image: fridge },
        { name: 'Pantry', image: pantry },
      ];
      
      const handleTypeClick = (type) => {
        setSelectedType(type);
        handleTypeSelect(type)
      };


      return (
        <div className='flex my-4 justify-center'>
          {types.map((type, index) => (
            <img
              key={index}
              src={type.image}
              className={`w-28 mx-2 p-2 rounded-md ${selectedType === type.name ? 'bg-gray-200' : ''}`}
              onClick={() => handleTypeClick(type.name)}
              alt={type.name}
            />
          ))}
        </div>
      );
    
}

export default ListTypes