import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
  const [filter, setFilter] = useState('');
  const handleKeyPress = (event) => {
    setFilter({ ...filter, nombre: event.target.value });
  };

  return (
 
    <div className="search-bar">
      <h2>{filter.nombre}</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={handleKeyPress}
        />
        <FontAwesomeIcon
          className="icon-faEllipsis"
          icon={faEllipsisV}
          size="lg"
        />
      </div>
    </div>

  );
}

export default Searchbar;
