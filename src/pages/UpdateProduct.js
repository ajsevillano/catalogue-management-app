import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Components
import Header from '../components/header/Header';
import Form from '../components/UpdateProduct/Form';
import Tablerownoresults from '../components/Catalogue/TableRownoresults';

const UpdateProduct = ({ match }) => {
  const [productData, setProductData] = useState([]);
  const [fetchError, setFetchError] = useState([]);

  const fetchUrl = `http://api.uniondistribuidora.com/products/${match.params.id}`;
  useEffect(() => {
    setTimeout(async function fetchData() {
      try {
        const product = await axios.get(fetchUrl);
        setProductData(product.data);
        return product;
      } catch (error) {
        setFetchError(error.response.status);
      }
    }, 250);
  }, []);

  return (
    <>
      <Header
        title={productData.map((item) => item.nombre)}
        status={productData.map((item) => item.activo)}
      />
      <section id="main" className="wrapper">
        <div className="update-product-container">
          <div className="update-product-side-menu">
            <h1>Imágenes</h1>
            <p>Productoid2.jpg / 240kb</p>
            <div className="img-container">
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
            {fetchError != 400 ? (
              productData.map((item, index) => (
                <Form
                  key={index}
                  id={match.params.id}
                  type={item.tipo}
                  brand={item.marca}
                  size={item.tamano}
                  name={item.nombre}
                  // status={item.activo}
                  // favorite={item.destacado}
                  // last_update={item.last_update}
                />
              ))
            ) : (
              <Tablerownoresults />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
