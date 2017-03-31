import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from "react-router";

import App from './App';
import NotFound from './NotFound';
import './index.css';

import store, {history} from './store';

var routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="admin" component={NotFound} >
                <Route path="pages" component={NotFound} />
                <Route path="/page/:pageSlug" component={NotFound} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));