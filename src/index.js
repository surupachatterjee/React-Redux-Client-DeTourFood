import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import Routes from './Routes';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import history from './History';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';




ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
