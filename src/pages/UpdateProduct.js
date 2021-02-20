import React from 'react';

//Components
import Header from '../components/header/Header';
import Form from '../components/UpdateProduct/Form';

const UpdateProduct = ({ match }) => {
  console.log(match);
  return (
    <>
      <Header title={'Producto #1'} />
      <section id="main" className="wrapper">
        <div className="update-product-container">
          <div className="update-product-side-menu">
            <h1>Imágenes</h1>
          </div>
          <div className="update-product-main-content">
            <h1>Información general</h1>
            <p>Última edición: Hoy a las 12:34:38</p>
            <Form id={match.params.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
