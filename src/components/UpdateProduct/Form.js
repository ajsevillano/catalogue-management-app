import React from 'react';

const Form = () => {
  return (
    <div className="update-product-form">
      <div className="first-row">
        <div className="name-holder">
          <label htmlFor="name">Nombre del producto</label>
          <input id="name" type="text" placeholder="Nombre" />
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

      <label htmlFor="marca">Marca del producto</label>
      <input id="marca" type="text" />
    </div>
  );
};

export default Form;
