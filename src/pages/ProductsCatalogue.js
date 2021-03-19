import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Layout from '../components/Layout/index';
import Searchbar from '../components/Searchbar/Searchbar';
import TableCatalog from '../components/ProductsCatalogue/Table';
import NewProductBar from '../components/NewProductBar/Index';
import Menubar from '../components/Menubar/Menubar';
import Modal from '../components/Modal/Modal';
import AddNewProduct from '../components/AddNewProduct/Index';

const ProductsCatalogue = () => {
  const [filter, setFilter] = useState(null);
  const [orderText, setOrderText] = useState('Más recientes');
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(
    'https://dev.ajsevillano.com/products'
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

  const handleOnClick = () => {
    setModalOpen(true);
  };

  //Fetch data when page loads or fetchUrl change,
  // add 150ms to debounce the fetch call.
  useEffect(() => {
    setTimeout(async function fetchData() {
      setLoading(true);
      const products = await axios.get(fetchUrl);
      setProductsData(products.data);
      setLoading(false);
      return products;
    }, 150);
  }, [fetchUrl]);
  return (
    <Layout title="Productos" button={'secundary'}>
      <Modal
        modalOpen={modalOpen}
        content={<AddNewProduct setModalOpen={setModalOpen} />}
      />
      <section id="main" className="wrapper">
        <Searchbar filter={filter} setFilter={setFilter} />
        <Menubar
          categories={categories}
          setCategories={setCategories}
          setFetchUrl={setFetchUrl}
          setLoading={setLoading}
          orderText={orderText}
          setOrderText={setOrderText}
        />
        <NewProductBar handleOnClick={handleOnClick} />
        <TableCatalog
          categories={categories}
          loading={loading}
          setFetchUrl={setFetchUrl}
          productsData={productsData}
          setProductsData={setProductsData}
          setLoading={setLoading}
          orderText={orderText}
          setOrderText={setOrderText}
          filter={filter}
        />
      </section>
    </Layout>
  );
};

export default ProductsCatalogue;
