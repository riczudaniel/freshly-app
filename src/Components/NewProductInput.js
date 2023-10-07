import React from 'react';

function NewProductInput () {
    return(
        <div className='max-w-md flex'>
            <input type='text' placeholder='Enter name..' className='w-1/3'></input>
            <input type='text' placeholder='Enter days..' className='w-1/3'></input>
            <input type='text' placeholder='Enter category..' className='w-1/3'></input>
        </div>
    )
}

export default NewProductInput;