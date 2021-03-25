import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuNav = () => {
  const [categories, setCategories] = useState([
    { name: 'Todos los productos', link: '/', isActive: false },
    { name: 'Todos los negocios', link: '/negocios', isActive: false },
  ]);
  const location = useLocation().pathname;

  useEffect(() => {
    const newSongs = categories.map((x) => {
      if (x.link === location) {
        return {
          ...x,
          isActive: true,
        };
      } else {
        return {
          ...x,
          isActive: false,
        };
      }
    });
    setCategories(newSongs);
  }, []);

  return (
    <div className="menubar">
      <nav>
        {categories.map((category, index) => (
          <p
            className={category.isActive == true ? 'isActive' : ''}
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
