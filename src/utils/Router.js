import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/ProductsCatalog';
import UpdateProduct from '../pages/UpdateProduct';

const AppRouter = () => {
  // <Router basename={'/projects/pim'}> Production path
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/updateproduct" exact component={UpdateProduct} />
        <Route path="/updateproduct/:id" component={UpdateProduct} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
