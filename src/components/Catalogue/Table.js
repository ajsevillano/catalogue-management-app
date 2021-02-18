import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import Tablerownoresults from './TableRownoresults';

import Menubar from '../Menubar/Menubar';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';
import TableRowSkeleton from './TableRowSkeleton';

function Table({ categories,loading, setFetchUrl, productsData, setLoading }) {


  return (

     

      <div className="table-catalogue">
        <div className="table-header">
          <h2>
            {loading === true
              ? 'Cargando...'
              : categories.map((item) => item.isActive == true && item.name)}
          </h2>

          <p>
            {loading === true
              ? ''
              : productsData.length == 0
              ? 'No hay productos que mostrar'
              : `total: ${productsData.length} productos`}
          </p>
          <p className="sort-order">
            <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
            ordenar por <span>MÁS RECIENTES</span>
            <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
          </p>
        </div>
        {loading === true ? (
          <>
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
            <TableRowSkeleton />
          </>
        ) : productsData.length == 0 ? (
          <Tablerownoresults />
        ) : (
          productsData.map((product) => (
            <TableRow
              key={product.id}
              id={product.id}
              name={product.nombre}
              brand={product.marca}
              size={product.tamano}
              status={product.activo}
              category={product.tipo}
              lastUpdate={product.last_update}
            />
          ))
        )}
      </div>
  
  );
}

export default Table;
