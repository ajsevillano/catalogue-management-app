import React from 'react';

//Components
import Checkbox from '../forms/Checkbox';
import Button from '../buttons/Button';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const AddNewProduct = () => {
  return (
    <>
      <h1>Añadir nuevo producto</h1>
      <form>
        <div className="input-container">
          <label htmlFor="name">Nombre que se mostrará en la web</label>
          <input type="text" name="name" />
        </div>
        <div className="input-container">
          <label htmlFor="brand">Marca del producto</label>
          <input type="text" name="brand" />
        </div>
        <div className="input-container">
          <label htmlFor="size">Tamaño del producto</label>
          <input type="text" name="size" />
        </div>
        <div className="input-container">
          <label htmlFor="type">Tipo de producto</label>
          <select name="type" id="type">
            <option value="vinos">Vinos</option>
          </select>
        </div>
        <div className="checkbox-container">
          <label htmlFor="status">¿El producto está activo?</label>
          <div className="checkbox-box">
            <Checkbox />
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
