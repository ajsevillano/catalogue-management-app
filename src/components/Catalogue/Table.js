import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import axios from 'axios';
import Menubar from '../header/Menubar/Menubar';

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
      <Menubar />
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
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
