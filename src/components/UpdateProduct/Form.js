import React, { useState, useRef } from 'react';
import Button from '../buttons/ButtonPrimary';
import axios from 'axios';
//Font awesome
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Form = ({
  id,
  type,
  brand,
  size,
  name,
  status,
  fetchUrl,
  setFetchUrl,
}) => {
  const [formValues, setFormValues] = useState({
    id: id,
    type: type,
    brand: brand,
    size: size,
    name: name,
    status: status,
  });
  const categories = [
    { name: 'vinos' },
    { name: 'cervezas' },
    { name: 'refrescos' },
    { name: 'lacteos' },
    { name: 'aguas' },
    { name: 'licores' },
    { name: 'otros' },
  ];

  const theSelect = useRef(null);

  const filterCategories = categories.filter((category) => {
    return category.name != type;
  });

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function updateProduct(e) {
    e.preventDefault();
    const headers = {
      'Content-Type': 'text/plain',
    };
    axios
      .put(
        'https://dev.ajsevillano.com/products',
        {
          id: formValues.id,
          tipo: formValues.type,
          marca: formValues.brand,
          tamano: formValues.size,
          nombre: formValues.name,
          activo: formValues.status,
        },
        { headers }
      )
      .then(
        (response) => {
          alert('Producto actualizado');
          setFetchUrl([fetchUrl]);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function selectCategoriesValues() {
    const firstValue = { name: type };
    const final = [firstValue, ...filterCategories];
    const result = final.map((category, index) => (
      <option key={index} value={category.name}>
        {category.name}
      </option>
    ));
    console.log(result);
    return result;
  }

  function selectStatusValues() {
    const selectOptions =
      status == 1 ? (
        <>
          <option key={1} value="1">
            Publicado
          </option>
          <option key={0} value="0">
            No publicado
          </option>
        </>
      ) : (
        <>
          <option key={0} value="0">
            No publicado
          </option>
          <option key={1} value="1">
            Publicado
          </option>
        </>
      );
    return selectOptions;
  }

  return (
    <div className="update-product-form">
      <form onSubmit={updateProduct}>
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
            <label htmlFor="type">
              Categoría
              <select name="type" onChange={(e) => handleChange(e)}>
                {selectCategoriesValues()}
              </select>
            </label>
          </div>
          <div className="status-holder">
            <label htmlFor="status">Estado</label>
            <select
              ref={theSelect}
              name="status"
              onChange={(e) => handleChange(e)}
            >
              {selectStatusValues()}
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
          type="submit"
          value="Submit"
          icon={faCloudUploadAlt}
          size={'sm'}
          text={'Actualizar el producto'}
        />
      </form>
    </div>
  );
};

export default Form;
