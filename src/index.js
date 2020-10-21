import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import * as reducers from './reducers';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

import 'semantic-ui-css/semantic.min.css'

const history = require('history').createBrowserHistory();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(
    logger,
    thunk,
    routerMiddleware(history)
  )
);

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
