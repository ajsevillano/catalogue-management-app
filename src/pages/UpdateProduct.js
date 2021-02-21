import React from 'react';

//Components
import Header from '../components/header/Header';
import Form from '../components/UpdateProduct/Form';

const UpdateProduct = ({ match }) => {
  return (
    <>
      <Header title={`Producto #${match.params.id}`} />
      <section id="main" className="wrapper">
        <div className="update-product-container">
          <div className="update-product-side-menu">
            <h1>Imágenes</h1>
            <p>Productoid2.jpg / 240kb</p>
            <div class="img-container">
              <img
                width="208px"
                height="208px"
                src={`http://gestion.uniondistribuidora.com/images/catalogo/Thumbnails/id${match.params.id}.jpg`}
                alt=""
              ></img>
            </div>
          </div>
          <div className="update-product-main-content">
            <h1>Información general</h1>
            <p>
              Última edición: <span className="">Hoy a las 12:34:38</span>
            </p>
            <Form id={match.params.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
