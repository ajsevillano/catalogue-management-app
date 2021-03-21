import React from 'react';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCog } from '@fortawesome/free-solid-svg-icons';

//Components
import TableRow from './TableRow';
import Tablerownoresults from './TableRownoresults';
import TableRowSkeleton from './TableRowSkeleton';

const Table = ({
  categories,
  loading,
  productsData,
  setProductsData,
  orderText,
  setOrderText,
  filter,
}) => {
  const updateOrder = () => {
    const reverseData = [...productsData].reverse();
    setProductsData(reverseData);
    setOrderText(
      orderText == 'Más recientes' ? 'Más antiguos' : 'Más recientes'
    );
  };

  const filteredProducts = () => {
    return productsData.filter((product) =>
      !filter
        ? product
        : product.nombre.toLowerCase().includes(filter.search.toLowerCase())
    );
  };

  const ShowCategory = () => {
    return loading === true
      ? 'Cargando...'
      : categories.map((item) => item.isActive == true && item.name);
  };

  const ShowNumberOfItems = () => {
    return filteredProducts().length === 0
      ? 'No hay productos que mostrar'
      : `total: ${filteredProducts().length} productos`;
  };

  const generateSkeletonComp = () => {
    return [...Array(4)].map((undefined, index) => (
      <TableRowSkeleton key={index} />
    ));
  };

  return (
    <div className="table-catalogue">
      <div className="table-header">
        <h2>{ShowCategory()}</h2>
        <p>{ShowNumberOfItems()}</p>
        <p className="sort-order">
          <FontAwesomeIcon className="faCog" icon={faCog} size="1x" />
          ordenar por <span onClick={updateOrder}>{orderText}</span>
          <FontAwesomeIcon className="sort" icon={faSort} size="sm" />
        </p>
      </div>
      {loading === true ? (
        generateSkeletonComp()
      ) : filteredProducts().length === 0 ? (
        <Tablerownoresults />
      ) : (
        filteredProducts().map((product) => (
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
};

export default Table;
