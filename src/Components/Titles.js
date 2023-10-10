import React, { useState } from 'react';

function Titles () {
    return(
        <div className='grid grid-cols-3 gap-12 px-4'>
            <h1>Name</h1>
            <h1>Days Until</h1>
            <h1>Group</h1>
        </div>
    )
}

export default Titles;