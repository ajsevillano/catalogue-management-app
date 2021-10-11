import React from 'react';

const Menubar = ({
  categories,
  setCategories,
  setFetchUrl,

  setOrderText,
}) => {
  function fetchCategory(category) {
    /* The api only return all the products/customers at the endpoint /products */
    const allProducts = `https://dev.ajsevillano.com/products`;
    const productsByCategory = `https://dev.ajsevillano.com/products?category=${category.name}`;
    return category.name == 'Todos'
      ? setFetchUrl(allProducts)
      : setFetchUrl(productsByCategory);
  }

  function changeCategoryStatus(category) {
    const { name, isActive } = category;
    const checkIsActive = !isActive
      ? 'el item no esta activo'
      : 'el item está activo';

    console.log(checkIsActive);
  }

  function MenuSelectHandler(category) {
    changeCategoryStatus(category);
    fetchCategory(category);
  }
  // const MenuSelectHandler = (category) => {

  //   setOrderText('Más recientes');

  //   setCategories(
  //     categories.map((item) => {
  //       return (item.isActive === true) & (category.name != item.name)
  //         ? { ...item, isActive: false }
  //         : item.name === category.name
  //         ? { ...item, isActive: true }
  //         : item;
  //     })
  //   );
  // };

  return (
    <div className="menubar">
      <nav>
        {categories?.map((category, index) => (
          <p
            className={category.isActive == true ? 'isActive' : undefined}
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
