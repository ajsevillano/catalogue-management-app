import React, { useState } from 'react';
import Button from '../button/Index';
import axios from 'axios';
//Font awesome
import { faSave } from '@fortawesome/free-solid-svg-icons';

//Components
import Input from '../forms/Inputs/Input';

const Form = ({
  id,
  type,
  brand,
  size,
  name,
  status,
  fetchUrl,
  setFetchUrl,
  notify,
}) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    id: id,
    type: type,
    brand: brand,
    size: size,
    name: name,
    status: status,
  });
  const [categories] = useState([
    { name: 'vinos' },
    { name: 'cervezas' },
    { name: 'refrescos' },
    { name: 'lacteos' },
    { name: 'aguas' },
    { name: 'licores' },
    { name: 'otros' },
  ]);

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function updateProduct(e) {
    e.preventDefault();
    setButtonLoading(true);
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
          notify();
          setButtonLoading(false);

          setFetchUrl([fetchUrl]);
        },
        (error) => {
          console.log(error);
        }
      );
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
            <Input
              type={'text'}
              name={'name'}
              defaultValue={formValues.name}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="second-row">
          <div className="brand-holder">
            <label htmlFor="marca">Marca del producto</label>
            <Input
              type={'text'}
              name={'brand'}
              defaultValue={formValues.brand}
              handleChange={handleChange}
            />
          </div>
          <div className="type-holder">
            <label htmlFor="type">
              Categoría
              <select
                name="type"
                value={formValues.type}
                onChange={(e) => handleChange(e)}
              >
                {categories.map((items) => (
                  <option key={items.name}>{items.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="status-holder">
            <label htmlFor="status">Estado</label>
            <select name="status" onChange={(e) => handleChange(e)}>
              {selectStatusValues()}
            </select>
          </div>
        </div>
        <div className="name-holder">
          <label htmlFor="size">Tamaño del producto</label>
          <Input
            type={'text'}
            name={'size'}
            defaultValue={formValues.size}
            handleChange={handleChange}
          />
        </div>
        <Button
          buttonLoading={buttonLoading}
          type="submit"
          value="Submit"
          icon={faSave}
          size={'lg'}
          text={'Actualizar el producto'}
          button={'primary'}
        ></Button>
      </form>
    </div>
  );
};

export default Form;
