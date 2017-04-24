import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from "react-router";

import App from './App';
import NotFound from './NotFound';
import PageList from './page/pageList';
import PageAdd from './page/pageAdd';
import PageEdit from './page/pageEdit';
import PageDelete from './page/pageDelete';
import PageSingle from './page/pageSingle';
import './index.css';

import store, {history} from './store';

var routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/pages" component={PageList} />
            <Route path=":pageSlug" component={PageSingle} />
            <Route path="/page/add" component={PageAdd} />
            <Route path="/page/edit/:id" component={PageEdit} />
            <Route path="/page/delete/:id" component={PageDelete} />
            <Route path="*" component={NotFound} />
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));