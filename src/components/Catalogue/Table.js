import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

import Menubar from '../Menubar/Menubar';
import SortBar from './SortByBar';

function Table({ fetchUrl, setFetchUrl, productsData }) {
  const categories = [
    'Todos',
    'Vinos',
    'Cervezas',
    'Refrescos',
    'Lacteos',
    'Aguas',
    'Otros',
  ];

  return (
    <div id="table" className="wrapper">
      <Menubar categories={categories} setFetchUrl={setFetchUrl} />
      <SortBar />
      <div className="table-catalogue">
        <div className="table-header">
          <h2>Todos los productos</h2>
          <p>total: {productsData.length}</p>
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
