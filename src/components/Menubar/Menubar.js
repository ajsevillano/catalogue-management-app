import React from 'react';

const Menubar = ({
  categories,
  setCategories,
  setFetchUrl,
  setLoading,
  setOrderText,
}) => {
  const MenuSelectHandler = (category) => {
    setLoading(true);
    setOrderText('Más recientes');
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
  };

  return (
    <div className="menubar">
      <nav>
        {categories.map((category, index) => (
          <p
            className={category.isActive == true ? 'isActive' : ''}
            key={index}
            onClick={
              category.isActive ? undefined : () => MenuSelectHandler(category)
            }
          >
            {category.name}
          </p>
        ))}
      </nav>
    </div>
  );
};

export default Menubar;
