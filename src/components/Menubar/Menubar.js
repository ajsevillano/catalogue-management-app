import React, { useEffect, useState } from 'react';

function Menubar({ categories }) {
  return (
    <div className="menubar">
      <nav>
        {categories &&
          categories.map((category) => (
            <a key={category} href="">
              {category}
            </a>
          ))}
      </nav>
      <h2></h2>
    </div>
  );
}

export default Menubar;
