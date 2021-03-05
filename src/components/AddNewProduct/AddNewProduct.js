import React, { useState } from 'react';
import axios from 'axios';

//Components
import Checkbox from '../forms/Checkbox';
import Button from '../buttons/Button';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const AddNewProduct = () => {
  //States
  const [formValues, setFormValues] = useState({ type: 'vinos', activo: 1 });
  const [buttonLoading, setButtonLoading] = useState(false);
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
  return (
    <>
      <h1>Añadir nuevo producto</h1>
      <form onSubmit={addProduct}>
        <div className="input-container">
          <label htmlFor="name">Nombre que se mostrará en la web</label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-container">
          <label htmlFor="brand">Marca del producto</label>
          <input type="text" name="brand" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-container">
          <label htmlFor="size">Tamaño del producto</label>
          <input type="text" name="size" onChange={(e) => handleChange(e)} />
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
          />
          <Button
            button={'primary'}
            text={'Añadir producto'}
            icon={faPaperPlane}
          />
        </div>
      </form>
    </>
  );
};

export default AddNewProduct;
