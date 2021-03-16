import React, { useState } from 'react';
import axios from 'axios';

//Helpers & Logic
import {
  HandleInputChanges,
  handleCheckBoxChange,
  handleAddProduct,
} from './AddNewProduct.utils';

//Font Awesome Icons
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalPicture from '../../assets/img/add-product.jpg';

//Components
import Checkbox from '../forms/Checkbox';
import Input from '../forms/Inputs/Input';
import Button from '../buttons/Button';
import Success from './SuccessScreen/Index';
import Error from './ErrorScreen/Index';

const AddNewProduct = ({ setModalOpen }) => {
  const [formValues, setFormValues] = useState({
    type: 'vinos',
    activo: 1,
    name: '',
    brand: '',
    size: '',
  });

  const categories = [
    'vinos',
    'cervezas',
    'refrescos',
    'lacteos',
    'aguas',
    'licores',
    'otros',
  ];

  const [buttonLoading, setButtonLoading] = useState(false);
  const [sentForm, setSentForm] = useState(false);
  const [fetchError, setFetcherror] = useState(false);

  const HandleChanges = (e) => HandleInputChanges(e, setFormValues, formValues);
  const HandleCheckbox = (e) =>
    handleCheckBoxChange(e, setFormValues, formValues);
  const addTheNewProduct = (e) =>
    handleAddProduct(
      e,
      formValues,
      setButtonLoading,
      setSentForm,
      setFetcherror
    );

  function handleCancelButton() {
    setModalOpen(false);
  }

  const SelectFile = (e) => {
    const imagefile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', imagefile, 'FutureID.jpg');
    axios
      .post('http://api.uniondistribuidora.com/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return sentForm ? (
    !fetchError ? (
      <Success
        handleCancelButton={handleCancelButton}
        productName={formValues.name}
      />
    ) : (
      <Error
        handleCancelButton={handleCancelButton}
        productName={formValues.name}
      />
    )
  ) : (
    <>
      <div className="modal-img">
        <img src={ModalPicture} alt="Modal picture" />
      </div>
      <div className="modal-content">
        <h1>Añadir nuevo producto</h1>
        <form onSubmit={addTheNewProduct}>
          <div className="input-container">
            <label htmlFor="name">Nombre que se mostrará en la web</label>
            <Input
              type="text"
              name="name"
              handleChange={HandleChanges}
              required={true}
            />
            <input type="file" name="file" onChange={SelectFile} />
          </div>
          <div className="input-container">
            <label htmlFor="brand">Marca del producto</label>
            <Input
              type="text"
              name="brand"
              handleChange={HandleChanges}
              required={true}
            />
          </div>
          <div className="input-container">
            <label htmlFor="size">Tamaño del producto</label>
            <Input
              type="text"
              name="size"
              handleChange={HandleChanges}
              required={true}
            />
          </div>
          <div className="input-container">
            <label htmlFor="type">Tipo de producto</label>
            <select name="type" onChange={HandleChanges}>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="checkbox-container">
            <label htmlFor="status">¿El producto está activo?</label>
            <div className="checkbox-box">
              <Checkbox
                status={formValues.activo}
                setFormValues={setFormValues}
                handleCheckBox={HandleCheckbox}
              />
            </div>
          </div>
          <div className="button-container">
            <Button
              button="secundary"
              text="Cancelar"
              inlineStyle={{ marginRight: '20px' }}
              icon={faTimes}
              handleOnClick={handleCancelButton}
            />
            <Button
              button="primary"
              text="Añadir producto"
              icon={faPaperPlane}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewProduct;
