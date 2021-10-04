import React from 'react';
import Route from 'react-router/lib/Route';
// import Redirect from 'react-router/lib/Redirect';
import LoginPage from './containers/pages/LoginPage/LoginPage';
import Loader from './components/Loader/Loader';
import HomePage from './containers/pages/HomePage/HomePage';
import ChoosePage from './containers/pages/ChoosePage/ChoosePage';
import AboutUs from './containers/pages/AboutUs/AboutUs';
import Cart from './containers/pages/Cart/Cart';
import ContactMe from './containers/pages/ContactMe/ContactMe';
import ErrorPage from './components/ErrorPage/ErrorPage';

const routes = (
    <Route>
        <Route path='/' component={LoginPage} />
        <Route exact path='/loader' component={Loader}/>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/choose' component={ChoosePage} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/contact' component={ContactMe} />
        {/* Error Route 404 Page. */}
        <Route path='*' component={(ErrorPage)} /> 
    </Route>
);

export default routes;
