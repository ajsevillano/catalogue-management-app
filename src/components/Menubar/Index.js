import React, { useState, useEffect } from 'react';

//Data
import { productCategories } from '../../data/categories';

const Menubar = ({ setFetchUrl, setOrderText }) => {
  const [categories, setCategories] = useState(productCategories);
  function fetchCategory(category) {
    /* The api only return all the products/customers at the endpoint /products */
    const allProducts = `https://dev.ajsevillano.com/products`;
    const productsByCategory = `https://dev.ajsevillano.com/products?category=${category.name}`;
    return category.name == 'Todos'
      ? setFetchUrl(allProducts)
      : setFetchUrl(productsByCategory);
  }

  function changeCategoryStatus(category) {
    const { name, isActive } = category;

    const updateMenu = categories.map((eachCheckBox) => {
      return eachCheckBox.name === name
        ? { ...eachCheckBox, isActive: true }
        : { ...eachCheckBox, isActive: false };
    });

    setCategories(updateMenu);
  }

  function MenuSelectHandler(category) {
    fetchCategory(category);
    changeCategoryStatus(category);
  }

  return (
    <div className="menubar">
      <nav>
        {categories?.map((category, index) => (
          <p
            className={category.isActive == true ? 'isActive' : undefined}
            key={index}
            onClick={() => MenuSelectHandler(category)}
          >
            {category.name}
          </p>
        ))}
      </nav>
    </div>
  );
};

export default Menubar;
