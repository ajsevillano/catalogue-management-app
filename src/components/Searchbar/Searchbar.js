import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';

function Searchbar({ filter, setFilter }) {
  const handleKeyPress = (event) => {
    setFilter({ ...filter, search: event.target.value });
  };

  return (
    <div className="search-bar">
      <div className="search-bar">
        <input
          className="input"
          type="text"
          placeholder="Buscar productos..."
          onChange={handleKeyPress}
        />
        <span>
          <FontAwesomeIcon className="icon-search" icon={faSearch} size="lg" />
        </span>
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
