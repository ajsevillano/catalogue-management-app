import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function SortByBar() {
  return (
    <div className="sort-bar">
      <p>Inicio - Productos</p>
      <button tabIndex="2">
        <FontAwesomeIcon className="sort" icon={faPlus} size="sm" /> Añadir
        producto
      </button>
    </div>
  );
}

export default SortByBar;
