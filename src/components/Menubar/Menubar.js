import React from 'react';

function Menubar({ categories, setFetchUrl }) {
  const MenuSelectHandler = (category) => {
    setFetchUrl(
      `http://api.uniondistribuidora.com/products?category=${category}`
    );
  };

  return (
    <div className="menubar">
      <nav>
        {categories &&
          categories.map((category) => (
            <p key={category} onClick={() => MenuSelectHandler(category)}>
              {category}
            </p>
          ))}
      </nav>
      <h2></h2>
    </div>
  );
}

export default Menubar;
