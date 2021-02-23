import React, { useState } from 'react';
import Button from '../buttons/ButtonPrimary';
//Font awesome
import {
  faCloudUploadAlt,
  faPlus,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

const Form = ({ id, type, brand, size, name }) => {
  const [defaultSelectValue, setDefaultSelectValue] = useState([
    {
      label: type,
      value: type,
    },
    { label: 'C-3PO', value: 'C-3PO' },
    { label: 'R2-D2', value: 'R2-D2' },
  ]);

  function handleChange(event) {
    setDefaultSelectValue({ value: event.target.value });
  }

  return (
    <div className="update-product-form">
      <div className="first-row">
        <div className="id-holder">
          <label htmlFor="id">Id</label>
          <input type="text" id="id" name="id" value={`#${id}`} readOnly />
        </div>
        <div className="name-holder">
          <label htmlFor="name">Nombre que se mostrará en la web</label>
          <input type="text" id="name" name="name" defaultValue={name} />
        </div>
      </div>

      <div className="second-row">
        <div className="brand-holder">
          <label htmlFor="marca">Marca del producto</label>
          <input id="marca" type="text" defaultValue={brand} />
        </div>
        <div className="type-holder">
          <form action="">
            <label htmlFor="type">
              Categoría
              <select>
                {defaultSelectValue.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </div>
        <div className="status-holder">
          <label htmlFor="type">Estado</label>
          <select id="status" name="status">
            <option value="1">Publicado</option>
            <option value="0">No publicado</option>
          </select>
        </div>
      </div>
      <div className="name-holder">
        <label htmlFor="size">Tamaño del producto</label>
        <input type="text" id="size" name="size" defaultValue={size} />
      </div>
      <Button
        icon={faCloudUploadAlt}
        size={'sm'}
        text={'Actualizar el producto'}
      />
    </div>
  );
};

export default Form;
