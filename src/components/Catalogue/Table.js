import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import axios from 'axios';
import Menubar from '../Menubar/Menubar';
import SortBar from '../Catalogue/SortByBar';

function Table() {
  const [productsData, setProductsData] = useState([]);
  // const categories = [vinos];

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

  {
    productsData.map((cat) => console.log(cat.tipo));
  }

  return (
    <div id="table" className="wrapper">
      <Menubar />
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
