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

  return <div id="table" className="wrapper"></div>;
}

export default Table;
