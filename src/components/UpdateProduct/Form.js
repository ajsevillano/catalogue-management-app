import React, { useState } from 'react';
import Button from '../buttons/ButtonPrimary';
//Font awesome
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Form = ({ id, type, brand, size, name, status }) => {
  const [formValues, setFormValues] = useState({
    id: id,
    type: type,
    brand: brand,
    size: size,
    name: name,
    status: status,
  });
  const [categories, setCategories] = useState([
    { name: 'vinos' },
    { name: 'cervezas' },
    { name: 'refrescos' },
    { name: 'lacteos' },
    { name: 'aguas' },
    { name: 'licores' },
    { name: 'otros' },
  ]);

  const filterCategories = categories.filter((number) => {
    return number.name != type;
  });

  function handleChange(event) {
    event.target.name == 'status'
      ? event.target.value == 'Publicado'
        ? setFormValues({
            ...formValues,
            [event.target.name]: '1',
          })
        : setFormValues({
            ...formValues,
            [event.target.name]: '0',
          })
      : setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
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
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            defaultValue={formValues.name}
          />
        </div>
      </div>

      <div className="second-row">
        <div className="brand-holder">
          <label htmlFor="marca">Marca del producto</label>
          <input
            type="text"
            name="brand"
            onChange={(e) => handleChange(e)}
            defaultValue={formValues.brand}
          />
        </div>
        <div className="type-holder">
          <form action="">
            <label htmlFor="type">
              Categoría
              <select name="type" onChange={(e) => handleChange(e)}>
                <option>{type}</option>
                {filterCategories.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
            </label>
          </form>
        </div>
        <div className="status-holder">
          <label htmlFor="status">Estado</label>
          <select name="status" onChange={(e) => handleChange(e)}>
            {status == 1 ? (
              <>
                <option>Publicado</option>
                <option>No publicado</option>
              </>
            ) : (
              <>
                <option>No Publicado</option>
                <option>Publicado</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="name-holder">
        <label htmlFor="size">Tamaño del producto</label>
        <input
          type="text"
          name="size"
          defaultValue={formValues.size}
          onChange={(e) => handleChange(e)}
        />
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
