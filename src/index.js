import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

import csvReducer from '../src/store/reducers/csvReducer'

import App from './App'


const rootReducer = combineReducers({
  csvItemsList: csvReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(ReduxThunk)));

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
