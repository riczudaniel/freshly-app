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
         <div className='border-slate-400 border mb-2 rounded py-1 max-w-fit'>
         <input
           className='w-1/3 px-4'
           type="text"
           placeholder="Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           onKeyPress={handleKeyPress}
         />
         <input
           className='w-1/3 px-3'
           type="date"
           placeholder="Date"
           value={daysUntil}
           onChange={(e) => setDaysUntil(e.target.value)}
           onKeyPress={handleKeyPress}
         />
         <input
           className='w-1/3 px-7'
           type="text"
           placeholder="Group"
           value={productGroup}
           onChange={(e) => setProductGroup(e.target.value)}
           onKeyPress={handleKeyPress}
         />
       </div>
    )
}

export default NewProductInput;