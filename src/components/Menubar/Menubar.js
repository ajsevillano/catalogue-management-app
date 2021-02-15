import React, { useState } from 'react';

function Menubar({ categories, setCategories, setFetchUrl }) {
  const [activeLink, setActivelink] = useState('');
  const MenuSelectHandler = (category) => {
    //Because the API doesn't return a category=All,
    // I use this conditional to get the righ URL for showing all.
    category.name == 'Todos'
      ? setFetchUrl(`http://api.uniondistribuidora.com/products`)
      : setFetchUrl(
          `http://api.uniondistribuidora.com/products?category=${category.name}`
        );

    console.log(categories);
  };

  return (
    <div className="menubar">
      <nav>
        {categories &&
          categories.map((category, index) => (
            <p
              className={category.isActive}
              key={index}
              onClick={() => MenuSelectHandler(category)}
            >
              {category.name}
            </p>
          ))}
      </nav>
      <h2></h2>
    </div>
  );
}

export default Menubar;
