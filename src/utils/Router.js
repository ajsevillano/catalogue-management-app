import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/ProductsCatalogue';
import UpdateProduct from '../pages/UpdateProduct';
import NotFound404 from '../pages/NotFound404';

const AppRouter = () => {
  // <Router basename={'/projects/pim'}> Production path
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/updateproduct" exact component={UpdateProduct} />
        <Route path="/updateproduct/:id" component={UpdateProduct} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
