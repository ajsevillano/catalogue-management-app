import React from 'react';

function Menubar({ categories }) {
  const MenuSelectHandler = (category) => {
    alert(category);
  };

  return (
    <div className="menubar">
      <nav>
        {categories &&
          categories.map((category) => (
            <p
              key={category}
              href=""
              onClick={() => MenuSelectHandler(category)}
            >
              {category}
            </p>
          ))}
      </nav>
      <h2></h2>
    </div>
  );
}

export default Menubar;
