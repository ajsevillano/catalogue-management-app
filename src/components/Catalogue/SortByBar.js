import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

function SortByBar() {
  return (
    <div className="sort-bar">
      <p>Inicio - Productos</p>
      <p className="sort-order">
        <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
        ordenar por <span>MÁS RECIENTES</span>
        <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
      </p>
    </div>
  );
}

export default SortByBar;
