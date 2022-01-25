import React, { useState } from 'react';

//Helpers & Logic
import {
  HandleInputChanges,
  handleCheckBoxChange,
  handleAddProduct,
  SelectFile,
  onBlurEvent,
} from './AddNewProduct.utils';

//Font Awesome Icons
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalPicture from '../../assets/img/add-product.jpg';

//Components
import Checkbox from '../forms/Checkbox';
import Input from '../forms/Inputs';
import Button from '../forms/button';
import Success from './SuccessScreen';
import Error from './ErrorScreen';

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
  const [uploadPicture, setuploadPicture] = useState(null);
  const [isInputEmpty, setisInputEmpty] = useState({});

  const SelectTheFile = (e) => SelectFile(e, setuploadPicture);
  const HandleChanges = (e) => HandleInputChanges(e, setFormValues, formValues);
  const HandleCheckbox = (e) =>
    handleCheckBoxChange(e, setFormValues, formValues);
  const addTheNewProduct = (e) =>
    handleAddProduct(
      e,
      formValues,
      buttonLoading,
      setButtonLoading,
      setSentForm,
      setFetcherror,
      uploadPicture
    );

  function handleCancelButton() {
    setModalOpen(false);
  }

  const HandleOnblur = (e) => onBlurEvent(e, isInputEmpty, setisInputEmpty);

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
        <img src={ModalPicture} alt="Modal" />
      </div>
      <div className="modal-content">
        <h1>Añadir nuevo producto</h1>
        <form onSubmit={addTheNewProduct}>
          <div className="input-container">
            <label htmlFor="name">Nombre que se mostrará en la web</label>
            {isInputEmpty.name === true && (
              <p className="minimsg">Por favor, introduce un nombre</p>
            )}
            <Input
              type="text"
              name="name"
              handleChange={HandleChanges}
              HandleOnblur={HandleOnblur}
              required={true}
            />
            <label htmlFor="file">
              La imagen debe ser en formato <strong>jpg</strong>
            </label>
            <Input
              type="file"
              accept=".jpg"
              name="file"
              handleChange={SelectTheFile}
            />
          </div>
          <div className="input-container">
            <label htmlFor="brand">Marca del producto</label>
            {isInputEmpty.brand === true && (
              <p className="minimsg">
                Por favor, introduce la marca del producto
              </p>
            )}
            <Input
              type="text"
              name="brand"
              handleChange={HandleChanges}
              HandleOnblur={HandleOnblur}
              required={true}
            />
          </div>
          <div className="input-container">
            <label htmlFor="size">Tamaño del producto</label>
            {isInputEmpty.size === true && (
              <p className="minimsg">
                Por favor,introduce el tamaño del producto
              </p>
            )}
            <Input
              type="text"
              name="size"
              handleChange={HandleChanges}
              HandleOnblur={HandleOnblur}
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
