import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import axios from 'axios';

function Table() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get(
        'http://api.uniondistribuidora.com/products'
      );
      setProductsData(products.data);
      return products;
    }
    fetchData();
  }, []);

  return (
    <div id="table" className="wrapper">
      <div className="table-catalogue">
        <div className="table-header">
          <h2>Categoría: Vinos Todos los productos</h2>
          <p>total: (170)</p>
        </div>
        {productsData.map((product) => (
          <TableRow
            key={product.id}
            id={product.id}
            name={product.nombre}
            status={product.activo}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
