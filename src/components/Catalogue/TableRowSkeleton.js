import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TableRowSkeleton() {
  return (
    <div className="row">
      <div className="img-container">
        <img
          src={`http://gestion.uniondistribuidora.com/images/catalogo/Thumbnails/id${id}.jpg`}
          alt=""
        />
      </div>
      <div className="item-id">
        <h2>ID</h2>
        <p>#{id}</p>
      </div>
      <div className="name">
        <h2>{name}</h2> <p>Botellín de 1/3</p>
      </div>
      <p className="brand">Cruzcampo</p>
      <p className="categoria">{category}</p>
      <div className="last-edited">
        <h2>Última edición</h2>
        <p>{formattedTime}</p>
      </div>
      <div className="checkbox-container">
        <label className="switch" htmlFor={`checkbox${id}`}>
          <input
            type="checkbox"
            id={`checkbox${id}`}
            defaultChecked={status == 1 ? true : false}
          />
          <div className="slider round"></div>
        </label>
      </div>
      <FontAwesomeIcon className="star" icon={faStar} size="lg" />
    </div>
  );
}

export default TableRowSkeleton;
