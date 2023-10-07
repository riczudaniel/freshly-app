import React from 'react';

function NewProductInput () {
    return(
        <div className='max-w-md flex'>
            <input type='text' placeholder='Enter name..' className='w-full'></input>
            <input type='text' placeholder='Enter days..' className='w-full'></input>
            <input type='text' placeholder='Enter category..' className='w-full'></input>
        </div>
    )
}

export default NewProductInput;