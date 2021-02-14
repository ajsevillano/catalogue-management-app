import React, { useState, useRef } from 'react';

import './App.scss';
import Header from './components/header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import TableCatalog from './components/Catalogue/Table';

function App() {
  const [fetchUrl, setFetchUrl] = useState([
    'http://api.uniondistribuidora.com/products',
  ]);
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Searchbar />
        <TableCatalog fetchUrl={fetchUrl} />
      </section>
    </div>
  );
}

export default App;
