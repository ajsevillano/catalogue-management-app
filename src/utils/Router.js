import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home';
import UpdateProduct from '../pages/UpdateProduct';
import NotFound404 from '../pages/Error404';

const AppRouter = () => {
  // <Router basename={'/projects/pim'}> Production path
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/updateproduct/:id">
          <UpdateProduct />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
