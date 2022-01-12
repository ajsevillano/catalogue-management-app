import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuNav = () => {
  const [categories, setCategories] = useState([
    { name: 'Todos los productos', link: '/', isActive: false },
    { name: 'Todos los negocios', link: '/negocios', isActive: false },
  ]);
  const location = useLocation().pathname;

  useEffect(() => {
    const changeMenu = categories.map((menu) =>
      menu.link === location
        ? { ...menu, isActive: true }
        : { ...menu, isActive: false }
    );
    setCategories(changeMenu);
  }, []);

  return (
    <div className="menubar">
      <nav>
        {categories.map((category, index) => (
          <p
            className={category.isActive === true ? 'isActive' : ''}
            key={index}
          >
            <Link to={category.link}>{category.name}</Link>
          </p>
        ))}
      </nav>
    </div>
  );
};

export default MenuNav;
