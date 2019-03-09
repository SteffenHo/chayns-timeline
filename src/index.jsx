import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers';
import { getNews } from './api';
import { Provider } from 'react-redux';
import createAsyncAwaitActionMiddleware from 'redux-async-await-action-middleware';
import { wrap } from './utils/asyncWarapper';
import { getMashupNews } from './actions/mashupNews';


/**
 * The init function is used to be sure, that chayns® will be ready until render() is called
 * @return {Promise.<void>}
 */
async function init() {
    try {
        if (__DEV__ || __STAGING__) {
            const installDevTools = require('immutable-devtools');
            installDevTools(immutable);
        }

        const storeMiddleware = [thunk];

        if (__DEV__ || __STAGING__) {
            storeMiddleware.push(require('redux-logger').default);
        }

        console.log(storeMiddleware);
        const store = createStore(
            rootReducer,
            applyMiddleware(...storeMiddleware)
        );

        await chayns.ready;

        const tappElement = document.querySelector('#app');
        ReactDOM.render(<Provider store={store}>
            <App/>
        </Provider>, tappElement);
        store.dispatch(getMashupNews());
    } catch (err) {
        console.warn('no chayns environment found', err);
    }
}


init();
