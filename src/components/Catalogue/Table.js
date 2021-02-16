import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

import Menubar from '../Menubar/Menubar';
import SortBar from './SortByBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

function Table({ setFetchUrl, productsData }) {
  const [categories, setCategories] = useState([
    { name: 'Todos', isActive: true },
    { name: 'Vinos', isActive: false },
    { name: 'Cervezas', isActive: false },
    { name: 'Refrescos', isActive: false },
    { name: 'Lacteos', isActive: false },
    { name: 'Aguas', isActive: false },
    { name: 'Otros', isActive: false },
  ]);

  return (
    <div id="table" className="wrapper">
      <Menubar
        categories={categories}
        setCategories={setCategories}
        setFetchUrl={setFetchUrl}
      />
      <SortBar />
      <div className="table-catalogue">
        <div className="table-header">
          <h2>Todos los productos</h2>
          <p>total: {productsData.length}</p>
          <p className="sort-order">
            <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
            ordenar por <span>MÁS RECIENTES</span>
            <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
          </p>
        </div>

        {productsData.map((product) => (
          <TableRow
            key={product.id}
            id={product.id}
            name={product.nombre}
            status={product.activo}
            category={product.tipo}
            lastUpdate={product.last_update}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
