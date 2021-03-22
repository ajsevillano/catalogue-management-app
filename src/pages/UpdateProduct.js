import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faSpider,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

//Components
import Layout from '../components/Layout/index';
import Form from '../components/UpdateProduct/Index';
import Tablerownoresults from '../components/Table/TableRownoresults';

//Toastify components
import { ToastContainer } from 'react-toastify';
import { Toast, ToastError } from '../utils/Toast';

const UpdateProduct = ({ match }) => {
  const inputEl = useRef(null);
  const labelEl = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [fetchError, setFetchError] = useState([]);
  const [fetchUrl, setFetchUrl] = useState([
    `https://dev.ajsevillano.com/products/${match.params.id}`,
  ]);

  const notify = () => Toast(productData);

  const SelectFile = (e) => {
    const fileExtension = e.target.files[0].name.split('.').pop();
    const imgId = match.params.id;
    const formData = new FormData();
    formData.append('file', e.target.files[0], `id${imgId}.${fileExtension}`);
    axios
      .post('https://dev.ajsevillano.com/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (ProgressEvent) => {
          setButtonLoading(true);
          labelEl.current.innerText = `Actualizando ... ${Math.round(
            (ProgressEvent.loaded / ProgressEvent.total) * 100
          )} %`;
        },
      })
      .then(
        (response) => {
          setButtonLoading(false);
          labelEl.current.innerText = `Actualizar Imagen`;
          Toast(productData);
          setFetchUrl([fetchUrl]);
        },
        (error) => {
          setButtonLoading(false);
          labelEl.current.innerText = `Actualizar Imagen`;
          ToastError();
        }
      );
  };

  const formattedTime = () => {
    return new Date(
      !productData
        ? 'Loading...'
        : productData.map((item) => item.last_update) * 1000
    ).toLocaleString();
  };

  const DefaultImage = (e) => {
    e.target.src =
      'http://gestion.uniondistribuidora.com/images/catalogo/Thumbnails/iddefault.jpg';
  };

  useEffect(() => {
    inputEl.current.className = 'update-product-container fadein';
    setTimeout(async function fetchData() {
      try {
        const product = await axios.get(fetchUrl);
        setProductData(product.data);
        return product;
      } catch (error) {
        setFetchError(error.response.status);
      }
    }, 200);
  }, [fetchUrl]);

  return (
    <Layout
      title={productData.map((item) => item.nombre)}
      status={productData.map((item) => item.activo)}
      button={'primary'}
    >
      <ToastContainer />
      <section id="main" className="wrapper">
        <div ref={inputEl} className="update-product-container hidden">
          <div className="update-product-side-menu">
            <h1>Imágen</h1>
            <p>Esta es la imagen del producto</p>
            <div className="img-container">
              <img
                width="200px"
                height="208px"
                src={`https://www.ajsevillano.com/projects/pim/img/Thumbnails/id${
                  match.params.id
                }.jpg?v=${Date.now()}`}
                alt=""
                onError={(e) => DefaultImage(e)}
              ></img>
              <div className="file-input">
                <input
                  type="file"
                  id="file"
                  className="file"
                  onChange={SelectFile}
                />
                <label
                  htmlFor="file"
                  className={buttonLoading ? 'disabled' : undefined}
                >
                  <FontAwesomeIcon
                    icon={buttonLoading ? faSpinner : faCamera}
                    spin={buttonLoading}
                    size="lg"
                  />{' '}
                  &nbsp;&nbsp;
                  <span ref={labelEl}>Actualizar Imagen</span>
                </label>
              </div>
            </div>
          </div>
          <div className="update-product-main-content">
            <h1>Información general</h1>
            <p>
              Última edición: <span>{formattedTime()}</span>
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
                  status={item.activo}
                  fetchUrl={fetchUrl}
                  setFetchUrl={setFetchUrl}
                  notify={notify}
                />
              ))
            ) : (
              <Tablerownoresults />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateProduct;
