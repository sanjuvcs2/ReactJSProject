import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Store from './redux/Store';
import routes from './routes';

ReactDOM.render(
    <Provider store={Store} key="provider">
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.getElementById('root')
);

//reportWebVitals();

// TODO: For testing purpose and need to be removed.
console.log('Initial State >>> ', Store.getState());