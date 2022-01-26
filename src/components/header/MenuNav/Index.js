import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuNav = () => {
  const [categories] = useState([
    { name: 'Todos los productos', link: '/', isActive: false },
  ]);

  return (
    <div className="menubar">
      <nav>
        {categories.map((category, index) => (
          <p className="isActive" key={index}>
            <Link to={category.link}>{category.name}</Link>
          </p>
        ))}
      </nav>
    </div>
  );
};

export default MenuNav;
