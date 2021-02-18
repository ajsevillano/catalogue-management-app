import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../buttons/ButtonPrimary';

function AddProductbar() {
  return (

    <div className="sort-bar">
      <p>Inicio - Productos</p>
      <Button icon={faPlus} size={'sm'} text={'Añadir producto'} />
    </div>

  );
}

export default AddProductbar;
