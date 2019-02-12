import 'babel-polyfill';
import 'es6-promise';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './css/index.scss';
import App from './components/App';
import reducer from './reducers';
import thunk from 'redux-thunk';
let preloadedState = {};
if (process.env.NODE_ENV === 'development') {
  preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
/*-----------------------------------------------------------*/
const store = createStore(reducer, preloadedState ,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
