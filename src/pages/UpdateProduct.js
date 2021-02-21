import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Components
import Header from '../components/header/Header';
import Form from '../components/UpdateProduct/Form';

const UpdateProduct = ({ match }) => {
  const [productData, setProductData] = useState(null);
  const fetchUrl = `http://api.uniondistribuidora.com/products/${match.params.id}`;
  useEffect(() => {
    setTimeout(async function fetchData() {
      const product = await axios.get(fetchUrl);
      setProductData(product.data);
      return product;
    }, 250);
  }, []);
  const todo = productData && productData.map((item) => item.tipo);

  return (
    <>
      <Header title={`Producto #${match.params.id}`} />
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
            <Form id={match.params.id} tipo={todo} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProduct;
