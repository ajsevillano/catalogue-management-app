import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import BreadcrumbsBar from '../../components/BreadcrumbsBar';
import ProductsNavBar from '../../components/ProductsNavBar';
import Searchbar from '../../components/Searchbar';
import Modal from '../../components/Modal';

//Data
import { productCategories } from '../../data/categories';

const ProductsCatalogue = () => {
  const [filter, setFilter] = useState(null);
  const [orderText, setOrderText] = useState('Más recientes');
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(process.env.REACT_APP_API_URL);
  const [categories, setCategories] = useState(productCategories);

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

      <ProductsNavBar
        setFetchUrl={setFetchUrl}
        orderText={orderText}
        categories={categories}
        setCategories={setCategories}
      />
      <BreadcrumbsBar handleOnClick={() => setModalOpen(true)} />
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
