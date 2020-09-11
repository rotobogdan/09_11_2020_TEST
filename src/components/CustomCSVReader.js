import React, { Component } from 'react'

import { CSVReader } from 'react-papaparse'


export default class CustomCSVReader extends Component {
  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }
 
  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }
 
  render() {
    return (
      <CSVReader
        onDrop={this.props.handleOnDrop}
        onError={this.handleOnError}
        addRemoveButton
        removeButtonColor='#659cef'
        onRemoveFile={this.handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    )
  }
}