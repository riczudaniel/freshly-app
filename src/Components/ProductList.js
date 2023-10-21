import React, { useState, useEffect } from 'react';
import Product from './Product';
import NewProductInput from './NewProductInput';
import AddButton from "./AddButton"
import Titles from "./Titles"



const ProductList = ({selectedType}) => {
  const initialProducts = {
    Freezer: [
      {
        name: 'Ice Cream',
        daysUntil: '7 days',
        productGroup: 'Frozen Foods',
      },
      {
        name: 'Frozen Vegetables',
        daysUntil: '14 days',
        productGroup: 'Frozen Foods',
      },
    ],
    Fridge: [
      {
        name: 'Milk',
        daysUntil: '3 days',
        productGroup: 'Dairy',
      },
      {
        name: 'Cheese',
        daysUntil: '7 days',
        productGroup: 'Dairy',
      },
    ],
    Pantry: [
      {
        name: 'Pasta',
        daysUntil: '365 days',
        productGroup: 'Dry Goods',
      },
      {
        name: 'Canned Soup',
        daysUntil: '180 days',
        productGroup: 'Canned Goods',
      },
    ],
  };
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    if (selectedType !== null) {
      setProducts(initialProducts[selectedType] || []);
    } else {
      setProducts([]);
    }
  }, [selectedType]);

  const [showNewProductInput, setShowNewProductInput] = useState(false);

  const addNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md">
        <h1 className="mx-auto text-center max-w-md mb-4 text-2xl">{`Products in ${selectedType} `}</h1>
        <div className="text-center">
          <AddButton onClick={() => setShowNewProductInput(true)}></AddButton>
        </div>
        <Titles></Titles>

        {showNewProductInput && <NewProductInput onAddProduct={addNewProduct} />}
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            daysUntil={product.daysUntil}
            productGroup={product.productGroup}
          />
        ))}
      </div>
    </div>
  );
};
 

export default ProductList