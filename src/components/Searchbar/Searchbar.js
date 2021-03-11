import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Searchbar({ filter, setFilter }) {
  const handleKeyPress = (event) => {
    setFilter({ ...filter, search: event.target.value });
  };

  return (
    <div className="search-bar">
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
