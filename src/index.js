import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

import csvReducer from '../src/store/reducers/csvReducer'

import App from './App'


const rootReducer = combineReducers({
  csvItemsList: csvReducer,
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
