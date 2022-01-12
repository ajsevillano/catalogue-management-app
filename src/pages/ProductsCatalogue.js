import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Layout from '../components/Layout/';
import Searchbar from '../components/Searchbar/';
import Table from '../components/Table';
import NewProductBar from '../components/NewProductBar';
import Menubar from '../components/Menubar';
import Modal from '../components/Modal';

//Data
import { productCategories } from '../data/categories';

const ProductsCatalogue = () => {
  const [filter, setFilter] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(
    'https://dev.ajsevillano.com/products'
  );
  const [categories, setCategories] = useState(productCategories);

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
    <Layout title="Productos" button="secundary">
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Searchbar
        filter={filter}
        setFilter={setFilter}
        categories={categories}
      />

      <Menubar
        setFetchUrl={setFetchUrl}
        categories={categories}
        setCategories={setCategories}
      />
      <NewProductBar handleOnClick={handleOnClick} />
      <Table
        categories={categories}
        loading={loading}
        setFetchUrl={setFetchUrl}
        productsData={productsData}
        setProductsData={setProductsData}
        setLoading={setLoading}
        filter={filter}
      />
    </Layout>
  );
};

export default ProductsCatalogue;
