import React from 'react';

const Form = ({ id }) => {
  return (
    <div className="update-product-form">
      <div className="first-row">
        <div className="id-holder">
          <label htmlFor="id">Id</label>
          <input type="text" id="id" name="id" value={`#${id}`} readOnly />
        </div>
        <div className="name-holder">
          <label htmlFor="name">Nombre del producto</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Botella de vino"
          />
        </div>

        <div className="type-holder">
          <label htmlFor="type">Categoría</label>
          <select id="type" name="type">
            <option value="vinos">Vinos</option>
            <option value="cervezas">Cervezas</option>
            <option value="aguas">Aguas</option>
            <option value="refrescos">Refrescos</option>
          </select>
        </div>
      </div>

      <div className="first-row">
        <div className="name-holder">
          <label htmlFor="marca">Marca del producto</label>
          <input id="marca" type="text" />
        </div>
        <div className="type-holder">
          <label htmlFor="type">Estado</label>
          <select id="status" name="status">
            <option value="vinos">Activado</option>
            <option value="cervezas">Desactivado</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
