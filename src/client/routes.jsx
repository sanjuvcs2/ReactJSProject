import React from 'react';
import Route from 'react-router/lib/Route';
// import Redirect from 'react-router/lib/Redirect';
import LoginPage from './containers/pages/LoginPage/LoginPage';
import Loader from './components/Loader/Loader'

const routes = (
    <Route>
        <Route path='/' component={LoginPage} />
        <Route exact path='/loader' component={Loader}/>
        {/* Error Route 404 Page. */}
        {/* <Route path='*' component={(ErrorPage)} /> */}
    </Route>
);

export default routes;
