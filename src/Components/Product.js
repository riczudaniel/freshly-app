import React from 'react';

function Product ({ name, daysUntil, productGroup}) {

  const dayNumber = daysUntil.slice(0,2)
  let backgroundColorClass

  if (parseInt(dayNumber) <= 3 ){
    backgroundColorClass = "bg-red-500"
  } else if (parseInt(dayNumber) <= 7 && parseInt(dayNumber) > 3) {
    backgroundColorClass = "bg-amber-300"
  } else if (parseInt(dayNumber) > 7 ) {
    backgroundColorClass = "bg-green-400"
  }

  return (
    <div className={`grid grid-cols-3 gap-12 justify-center max-w-md rounded-md mb-2 px-4 py-1 ${backgroundColorClass}`}>
      <p>{name}</p>
      <p>{daysUntil}</p>
      <p>{productGroup}</p>
    </div>
  );
}

export default Product;