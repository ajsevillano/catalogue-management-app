import React, { useState } from 'react';
import axios from 'axios';

//Components
import Checkbox from '../forms/Checkbox';
import Input from '../forms/Inputs/Input';
import Button from '../buttons/Button';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalPicture from '../../assets/img/add-product.jpg';

import Lottie from 'react-lottie';
import * as success from '../../assets/animations/success.json';

const AddNewProduct = ({ setModalOpen }) => {
  //States
  const [formValues, setFormValues] = useState({
    type: 'vinos',
    activo: 1,
    name: '',
    brand: '',
    size: '',
  });
  const [buttonLoading, setButtonLoading] = useState(false);
  const [sentForm, setSentForm] = useState(false);
  const headers = { 'Content-Type': 'text/plain' };

  //Methods
  function addProduct(e) {
    e.preventDefault();
    setButtonLoading(true);
    console.log('en progreso');
    axios
      .post(
        'https://dev.ajsevillano.com/products',
        {
          tipo: formValues.type,
          marca: formValues.brand,
          tamano: formValues.size,
          nombre: formValues.name,
          activo: formValues.activo,
        },
        { headers }
      )
      .then(
        (response) => {
          setButtonLoading(false);
          setSentForm(true);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckBox(e) {
    const statusValue = e.target.checked == true ? 1 : 0;
    setFormValues({
      ...formValues,
      [e.target.name]: statusValue,
    });
    console.log(e.target.checked);
  }

  function handleCancelButton() {
    setModalOpen(false);
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return sentForm == true ? (
    <div className="modal-content">
      <div>
        <Lottie options={defaultOptions} height={120} width={120} />
      </div>
      <h1>Producto añadido</h1>
    </div>
  ) : (
    <>
      <div className="modal-img">
        <img src={ModalPicture} alt="Modal picture" />
      </div>
      <div className="modal-content">
        <h1>Añadir nuevo producto</h1>
        <form onSubmit={addProduct}>
          <div className="input-container">
            <label htmlFor="name">Nombre que se mostrará en la web</label>
            <Input
              type={'text'}
              name={'name'}
              defaultValue={''}
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="brand">Marca del producto</label>
            <Input
              type={'text'}
              name={'brand'}
              defaultValue={''}
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="size">Tamaño del producto</label>
            <Input
              type={'text'}
              name={'size'}
              defaultValue={''}
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="type">Tipo de producto</label>
            <select name="type" onChange={(e) => handleChange(e)}>
              <option value="vinos">Vinos</option>
              <option value="cervezas">Cervezas</option>
              <option value="refrescos">Refrescos</option>
              <option value="lacteos">Lacteos</option>
              <option value="aguas">Aguas</option>
              <option value="licores">Licores</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div className="checkbox-container">
            <label htmlFor="status">¿El producto está activo?</label>
            <div className="checkbox-box">
              <Checkbox
                status={formValues.activo}
                setFormValues={setFormValues}
                handleCheckBox={handleCheckBox}
              />
            </div>
          </div>
          <div className="button-container">
            <Button
              button={'secundary'}
              text={'Cancelar'}
              inlineStyle={{ marginRight: '20px' }}
              icon={faTimes}
              handleOnClick={handleCancelButton}
            />
            <Button
              button={'primary'}
              text={'Añadir producto'}
              icon={faPaperPlane}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewProduct;
