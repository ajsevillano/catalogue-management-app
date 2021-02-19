import React from 'react';
import { Link } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TableRow({
  id,
  name,
  brand,
  size,
  status,
  category,
  lastUpdate,
  favorite,
}) {
  //Format the date from timestamp to human-friendly date string
  const formattedTime = new Date(lastUpdate * 1000).toLocaleString();

  return (
    <Link to={`/UpdateProduct/${id}`}>
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
          <h2>{name}</h2> <p>{size}</p>
        </div>
        <p className="brand">{brand}</p>
        <p className="categoria">{category}</p>
        <div className="last-edited">
          <h2>Última edición</h2>
          <p>{formattedTime}</p>
        </div>
        <div
          className={
            status == 1
              ? 'status-container status-on'
              : 'status-container status-off'
          }
        >
          <p>{status == 1 ? 'publicado' : 'no publicado'}</p>
        </div>

        <FontAwesomeIcon
          className={favorite == 1 ? 'star' : 'star-off'}
          icon={faStar}
          size="lg"
        />
      </div>
    </Link>
  );
}

export default TableRow;
