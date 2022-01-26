import React, { useEffect, useRef, useState } from 'react';

//Others
import { useParams } from 'react-router';
import axios from 'axios';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSpinner } from '@fortawesome/free-solid-svg-icons';

//Components
import Layout from '../../components/Layout';
import Form from '../../components/UpdateProduct';
import NoResultsScreen from '../../components/Table';

//Toastify components
import { ToastContainer } from 'react-toastify';
import { Toast, ToastError } from '../../utils/Toast';

const UpdateProduct = () => {
  const params = useParams();
  const inputEl = useRef(null);
  const labelEl = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [fetchError, setFetchError] = useState([]);
  const [fetchUrl, setFetchUrl] = useState([
    `https://dev.ajsevillano.com/products/${params.id}`,
  ]);

  const notify = () => Toast(productData);

  const SelectFile = (e) => {
    const fileExtension = e.target.files[0].name.split('.').pop();
    const imgId = params.id;
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
          const Uploadtype = 'img';
          setButtonLoading(false);
          labelEl.current.innerText = `Actualizar Imagen`;
          Toast(productData, Uploadtype);
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
      button="primary"
    >
      <ToastContainer />
      <section id="main" className="wrapper">
        <div ref={inputEl} className="update-product-container hidden">
          <div className="update-product-side-menu">
            <h1>Imágen</h1>
            <p>
              El formato de la img debe ser <strong>JPG</strong>
            </p>
            <div className="img-container">
              <img
                width="200px"
                height="208px"
                src={`https://imgdata.ajsevillano.com/uniondistribuidora/img/Thumbnails/id${
                  params.id
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
                  className={`label-file ${buttonLoading ? 'disabled' : undefined}`}
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
            {fetchError !== 400 ? (
              productData.map((item, index) => (
                <Form
                  key={index}
                  id={params.id}
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
              <NoResultsScreen />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateProduct;
