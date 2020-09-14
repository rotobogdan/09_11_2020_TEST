import React from 'react';
import CsvDownloader from 'react-csv-downloader';

const CustomCSVDownloader = props => {
  const [state, setState] = React.useState({
    columns: [{
      id: 'first',
      displayName: 'First column'
    }, {
      id: 'second',
      displayName: 'Second column'
    }],
    data: [{
      first: 'foo',
      second: 'bar'
    }, {
      first: 'foobar',
      second: 'foobar'
    }],
  });

  return (
    <div>
      <CsvDownloader
        filename="myfile"
        separator=";"
        wrapColumnChar="'"
        columns={state.columns}
        datas={state.datas}
        text="DOWNLOAD CSV" />
    </div>
  );
}

export default CustomCSVDownloader;