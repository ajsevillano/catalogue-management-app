import React from 'react';

const Menubar = ({ setFetchUrl, categories, setCategories }) => {
  function fetchCategory(category) {
    /* The api only return all the products/customers at the endpoint /products */
    const allProducts = `https://dev.ajsevillano.com/products`;
    const productsByCategory = `https://dev.ajsevillano.com/products?category=${category.name}`;
    return category.name === 'Todos'
      ? setFetchUrl(allProducts)
      : setFetchUrl(productsByCategory);
  }

  function changeCategoryStatus(category) {
    const { name } = category;
    const updateMenu = categories.map((eachMenuItem) => {
      return eachMenuItem.name === name
        ? { ...eachMenuItem, isActive: true }
        : { ...eachMenuItem, isActive: false };
    });
    setCategories(updateMenu);
  }

  function MenuSelectHandler(category) {
    fetchCategory(category);
    changeCategoryStatus(category);
  }

  return (
    <div className="menubar">
      <nav>
        {categories?.map((category, index) => (
          <p
            className={category.isActive ? 'isActive' : undefined}
            key={index}
            onClick={() => MenuSelectHandler(category)}
          >
            {category.name}
          </p>
        ))}
      </nav>
    </div>
  );
};

export default Menubar;
