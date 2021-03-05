import React from 'react';

const AddNewProduct = () => {
  return (
    <>
      <form>
        <label htmlFor="name">Nombre que se mostrará en la web</label>
        <input type="text" name="name" />
        <label htmlFor="brand">Marca del producto</label>
        <input type="text" name="brand" />
        <label htmlFor="size">Tamaño del producto</label>
        <input type="text" name="size" />
        <label htmlFor="type">Tipo de producto</label>
        <select name="type" id="type">
          <option value="vinos">Vinos</option>
        </select>
        <label htmlFor="status">Estado del producto</label>
        <input type="checkbox" name="status" id="status" />
      </form>
    </>
  );
};

export default AddNewProduct;
