import React from 'react';

//Components

const UpdateProduct = ({ match }) => {
  console.log(match);
  return (
    <>
      <section id="main" className="wrapper">
        <div className="update-product-container">
          <div className="update-product-side-menu">Lateral</div>
          <div className="update-product-main-content">
            <h1>Información general</h1>
            <p>Productos / Vinos</p>
          </div>
        </div>
        <h1>{match.params.id}</h1>
      </section>
    </>
  );
};

export default UpdateProduct;
