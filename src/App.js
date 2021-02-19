import React from 'react';
import Header from './components/header/Header';
import Home from './pages/ProductsCatalog';
import UpdateProduct from './pages/UpdateProduct';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Updateproduct" component={UpdateProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
