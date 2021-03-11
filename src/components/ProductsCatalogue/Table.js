import React, { useState } from 'react';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

//Components
import TableRow from './TableRow';
import Tablerownoresults from './TableRownoresults';
import TableRowSkeleton from './TableRowSkeleton';

function Table({
  categories,
  loading,
  productsData,
  setProductsData,
  orderText,
  setOrderText,
  filter,
}) {
  const updateOrder = () => {
    const reverseData = [...productsData].reverse();
    setProductsData(reverseData);
    setOrderText(
      orderText == 'Más recientes' ? 'Más antiguos' : 'Más recientes'
    );
  };

  const init = () => {
    return productsData.filter((product) =>
      !filter
        ? product
        : product.nombre.toLowerCase().includes(filter.search.toLowerCase())
    );
  };

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
            : init().length == 0
            ? 'No hay productos que mostrar'
            : `total: ${init().length} productos`}
        </p>
        <p className="sort-order">
          <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
          ordenar por <span onClick={updateOrder}>{orderText}</span>
          <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
        </p>
      </div>
      {loading === true ? (
        [...Array(4)].map((undefined, index) => (
          <TableRowSkeleton key={index} />
        ))
      ) : init().length == 0 ? (
        <Tablerownoresults />
      ) : (
        init().map((product) => (
          <TableRow
            key={product.id}
            id={product.id}
            name={product.nombre}
            brand={product.marca}
            size={product.tamano}
            status={product.activo}
            category={product.tipo}
            lastUpdate={product.last_update}
            favorite={product.destacado}
          />
        ))
      )}
    </div>
  );
}

export default Table;
