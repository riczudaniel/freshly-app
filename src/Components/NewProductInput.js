import React, { useState } from 'react';

function NewProductInput({ onAddProduct }) {

    const [name, setName] = useState('');
    const [daysUntil, setDaysUntil] = useState('');
    const [productGroup, setProductGroup] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && name && daysUntil && productGroup) {
          onAddProduct({ name, daysUntil, productGroup });
          // Reset input fields
          setName('');
          setDaysUntil('');
          setProductGroup('');
        }
      };

    return(
        // <div className='max-w-md flex'>
        //     <input type='text' placeholder='Enter name..' className='w-1/3'></input>
        //     <input type='text' placeholder='Enter days..' className='w-1/3'></input>
        //     <input type='text' placeholder='Enter category..' className='w-1/3'></input>
        // </div>
         <div>
         <input
           className='w-1/3'
           type="text"
           placeholder="Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           onKeyPress={handleKeyPress}
         />
         <input
           className='w-1/3'
           type="text"
           placeholder="Days Until"
           value={daysUntil}
           onChange={(e) => setDaysUntil(e.target.value)}
           onKeyPress={handleKeyPress}
         />
         <input
           className='w-1/3'
           type="text"
           placeholder="Product Group"
           value={productGroup}
           onChange={(e) => setProductGroup(e.target.value)}
           onKeyPress={handleKeyPress}
         />
       </div>
    )
}

export default NewProductInput;