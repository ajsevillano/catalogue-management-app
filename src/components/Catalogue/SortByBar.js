import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function SortByBar() {
  return (
    <div className="sort-bar">
      <p>
        Ordenar por <span>MÁS RECIENTES</span>
        <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
      </p>
    </div>
  );
}

export default SortByBar;
