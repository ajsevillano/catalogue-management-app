import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
  return (
    <div className="search-bar-container wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
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
