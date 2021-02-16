import React, { useState } from 'react';

function Menubar({ categories, setCategories, setFetchUrl }) {
  const MenuSelectHandler = (category) => {
    //Because the API doesn't return a category=All,
    // I use this conditional to get the righ URL for showing all.
    category.name == 'Todos'
      ? setFetchUrl(`http://api.uniondistribuidora.com/products`)
      : setFetchUrl(
          `http://api.uniondistribuidora.com/products?category=${category.name}`
        );

    setCategories(
      categories.map((item) => {
        return (item.isActive === true) & (category.name != item.name)
          ? { ...item, isActive: false }
          : item.name === category.name
          ? { ...item, isActive: true }
          : item;
      })
    );

    console.log(category.name);
  };

  return (
    <div className="menubar">
      <nav>
        {categories &&
          categories.map((category, index) => (
            <p
              className={category.isActive == true ? 'isActive' : ''}
              key={index}
              onClick={() => MenuSelectHandler(category)}
            >
              {category.name}
            </p>
          ))}
      </nav>
    </div>
  );
}

export default Menubar;
