import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/public/home';
import Login from 'components/public/login';
import Signup from 'components/public/signup';
import Blog from 'components/public/blog';
import Account from 'components/public/account';
import Header from 'components/shared/header';
import Footer from 'components/shared/footer';
import * as ROUTES from 'constants/routes';
import NotFound from './404';

const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route exact path={ROUTES.SIGNUP} component={Signup} />
      <Route exact path={ROUTES.BLOG} component={Blog} />
      <Route exact path={ROUTES.ACCOUNT} component={Account} />
      <NotFound />
    </Switch>
    <Footer />
  </Fragment>
);

export default App;
