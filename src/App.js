import React, { useState, useEffect } from 'react';

import './App.scss';
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import TableCatalog from './components/Catalogue/Table';
import axios from 'axios';

function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchUrl, setFetchUrl] = useState(
    'http://api.uniondistribuidora.com/products'
  );

  //Fetch data when page loads or fetchUrl change,
  // add 150ms to debounce the fetch call.
  useEffect(() => {
    setTimeout(async function fetchData() {
      setLoading(true);
      const products = await axios.get(fetchUrl);
      setProductsData(products.data);
      setLoading(false);
      return products;
    }, 250);
  }, [fetchUrl]);

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Searchbar />
        <TableCatalog
          loading={loading}
          setFetchUrl={setFetchUrl}
          productsData={productsData}
          setProductsData={setProductsData}
          setLoading={setLoading}
        />
      </section>
    </div>
  );
}

export default App;
