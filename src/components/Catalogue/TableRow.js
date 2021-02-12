import React from 'react';
import ImgProduct from '../../assets/img/id1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TableRow({ id }) {
  return (
    <div className="row">
      <img src={ImgProduct} alt="" />
      <div className="item-id">
        <h2>ID</h2>
        <p>#01</p>
      </div>
      <div className="name">
        <h2>Cerveza Cruzcampo</h2> <p>Botellín de 1/3</p>
      </div>
      <p>Cruzcampo</p>
      <p className="categoria">Vinos</p>
      <div className="last-edited">
        <h2>Última edición</h2>
        <p>12/02/21 a las 21:30</p>
      </div>
      <div className="checkbox-container">
        <label className="switch" htmlFor={`checkbox${id}`}>
          <input type="checkbox" id={`checkbox${id}`} />
          <div className="slider round"></div>
        </label>
      </div>
      <FontAwesomeIcon className="star" icon={faStar} size="lg" />
    </div>
  );
}

export default TableRow;
