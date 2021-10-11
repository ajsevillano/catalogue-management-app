import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Layout from '../components/Layout/index';
import Searchbar from '../components/Searchbar/Index';
import Table from '../components/Table';
import NewProductBar from '../components/NewProductBar/Index';
import Menubar from '../components/Menubar/Index';
import Modal from '../components/Modal';

//Data
import { productCategories } from '../data/categories';

const ProductsCatalogue = () => {
  const [filter, setFilter] = useState(null);
  const [orderText, setOrderText] = useState('Más recientes');
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(
    'https://dev.ajsevillano.com/products'
  );
  const [categories, setCategories] = useState([]);

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
      setCategories(productCategories);
      return products;
    }, 150);
  }, [fetchUrl]);

  return (
    <Layout title="Productos" button="secundary">
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Searchbar filter={filter} setFilter={setFilter} />

      <Menubar setFetchUrl={setFetchUrl} orderText={orderText} />
      <NewProductBar handleOnClick={handleOnClick} />
      <Table
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
    </Layout>
  );
};

export default ProductsCatalogue;
