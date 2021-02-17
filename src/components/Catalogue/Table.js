import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import Tablerownoresults from './TableRownoresults';

import Menubar from '../Menubar/Menubar';
import SortBar from './SortByBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

function Table({ setFetchUrl, productsData }) {
  //State categories
  const [categories, setCategories] = useState([
    { name: 'Todos', isActive: true },
    { name: 'Vinos', isActive: false },
    { name: 'Cervezas', isActive: false },
    { name: 'Refrescos', isActive: false },
    { name: 'Lacteos', isActive: false },
    { name: 'Aguas', isActive: false },
    { name: 'Licores', isActive: false },
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
          <h2>
            {categories.map((item) => item.isActive == true && item.name)}
          </h2>
          <p>
            {!productsData
              ? 'Cargando...'
              : productsData.length == 0
              ? 'No hay productos que mostrar'
              : `Total: ${productsData.length}`}
          </p>
          <p className="sort-order">
            <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
            ordenar por <span>MÁS RECIENTES</span>
            <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
          </p>
        </div>
        {!productsData ? (
          'skeleton'
        ) : productsData.length == 0 ? (
          <Tablerownoresults />
        ) : (
          productsData.map((product) => (
            <TableRow
              key={product.id}
              id={product.id}
              name={product.nombre}
              status={product.activo}
              category={product.tipo}
              lastUpdate={product.last_update}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Table;
