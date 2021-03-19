import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuNav = () => {
  const [categories] = useState([
    { name: 'Todos los productos', link: '/', isActive: true },
    { name: 'Todos los negocios', link: '/negocios', isActive: false },
  ]);
  return (
    <div className="menubar">
      <nav>
        {categories.map((category, index) => (
          <p
            className={category.isActive == true ? 'isActive' : ''}
            key={index}
            // onClick={
            //   category.isActive ? undefined : () => MenuSelectHandler(category)
            // }
          >
            {' '}
            <Link to={category.link}>{category.name}</Link>
          </p>
        ))}
      </nav>
    </div>
  );
};

export default MenuNav;
