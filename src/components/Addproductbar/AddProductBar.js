import React from 'react';
//Font awesome
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//Components
import ButtonOpenModal from '../buttons/ButtonOpenModal';

function AddProductbar({ handleModalButton }) {
  return (
    <div className="sort-bar">
      <p>Inicio - Productos</p>
      <ButtonOpenModal
        handleModalButton={handleModalButton}
        icon={faPlus}
        size={'sm'}
        text={'Añadir producto'}
        button={'primary'}
      />
    </div>
  );
}

export default AddProductbar;
