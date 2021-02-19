import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

//Components
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import TableCatalog from './components/Catalogue/Table';
import AddProductBar from './components/Addproductbar/AddProductBar';
import Menubar from './components/Menubar/Menubar';

function App() {
  const [orderText, setOrderText] = useState('Más recientes');
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchUrl, setFetchUrl] = useState(
    'http://api.uniondistribuidora.com/products'
  );
  const [categories, setCategories] = useState([
    { name: 'Todos', isActive: true },
    { name: 'Vinos', isActive: false },
    { name: 'Cervezas', isActive: false },
    { name: 'Refrescos', isActive: false },
    { name: 'Lacteos', isActive: false },
    { name: 'Aguas', isActive: false },
    { name: 'Licores', isActive: false },
    { name: 'Otros', isActive: false },
  ]);

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
      <section id="main" className="wrapper">
        <Searchbar />
        <Menubar
          categories={categories}
          setCategories={setCategories}
          setFetchUrl={setFetchUrl}
          setLoading={setLoading}
          orderText={orderText}
          setOrderText={setOrderText}
        />
        <AddProductBar />
        <TableCatalog
          categories={categories}
          loading={loading}
          setFetchUrl={setFetchUrl}
          productsData={productsData}
          setProductsData={setProductsData}
          setLoading={setLoading}
          orderText={orderText}
          setOrderText={setOrderText}
        />
      </section>
    </div>
  );
}

export default App;
