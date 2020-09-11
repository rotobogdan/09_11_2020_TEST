import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

import CustomCSVReader from './components/CustomCSVReader';
import CustomTable from './components/CustomTable';
import {importCsv} from './store/actions/csvAction';

const App = () => {
  const availableCsv = useSelector(state => state.csvItemsList.csvItemsList)

  const dispatch = useDispatch();

  const handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log(data)
    dispatch(importCsv(data));
    console.log('---------------------------')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Csv Processing EDENRED.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <CustomCSVReader handleOnDrop={handleOnDrop} />
        <CustomTable />
      </header>
    </div>
  );
}

export default App;
