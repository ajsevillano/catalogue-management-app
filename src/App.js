import React, { useState, useEffect } from 'react';

import './App.scss';
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import TableCatalog from './components/Catalogue/Table';
import axios from 'axios';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [fetchUrl, setFetchUrl] = useState([
    'http://api.uniondistribuidora.com/products',
  ]);

  //Fetch data when page loads
  useEffect(() => {
    setTimeout(async function fetchData() {
      const products = await axios.get(fetchUrl);
      setProductsData(products.data);
      return products;
    }, 550);
  }, [fetchUrl]);
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Searchbar />
        <TableCatalog setFetchUrl={setFetchUrl} productsData={productsData} />
      </section>
    </div>
  );
}

export default App;
