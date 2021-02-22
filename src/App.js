import React from 'react';
import Home from './pages/ProductsCatalog';
import UpdateProduct from './pages/UpdateProduct';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/updateproduct/:id" component={UpdateProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
