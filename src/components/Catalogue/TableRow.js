import React from 'react';
import ImgProduct from '../../assets/img/id1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TableRow() {
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
      <div className="marca">
        <h2>Marca</h2>
        <p>Cruzcampo</p>
      </div>

      <div className="category">
        <h2>Categoría</h2>
        <p>Vinos</p>
      </div>

      <div className="last-edited">
        <h2>Última edición</h2>
        <p>12/02/21 a las 21:30</p>
      </div>

      <div className="estado">
        <h2>Estado</h2>
        <input type="checkbox" name="active" id="" />
      </div>
      <FontAwesomeIcon icon={faStar} size="lg" />
    </div>
  );
}

export default TableRow;
