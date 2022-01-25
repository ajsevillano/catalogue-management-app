import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Layout from '../components/Layout/';
import Searchbar from '../components/Searchbar/';
import TableCatalog from '../components/Table';
import NewProductBar from '../components/NewProductBar';
import Menubar from '../components/Menubar';
import Modal from '../components/Modal/';

//Data
import { customerCategories } from '../data/categories';

const CustomersCatalogue = () => {
  const [filter, setFilter] = useState(null);
  const [orderText, setOrderText] = useState('Más recientes');
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(
    'https://dev.ajsevillano.com/customers'
  );
  const [categories, setCategories] = useState(customerCategories);

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
    <Layout title="Negocios" button="secundary">
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Searchbar
        filter={filter}
        setFilter={setFilter}
        categories={categories}
      />
      <Menubar
        categories={categories}
        setCategories={setCategories}
        setFetchUrl={setFetchUrl}
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
    </Layout>
  );
};

export default CustomersCatalogue;
