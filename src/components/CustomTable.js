import React from 'react';
import MaterialTable from 'material-table';
import ViewColumn from "@material-ui/icons/ViewColumn";
import Search from "@material-ui/icons/Search";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";

const CustomTable = props => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'BIB', field: 'bib', type: 'numeric' },
      { title: 'First Name', field: 'firstName' },
      { title: 'Last Name', field: 'lastname' },
      { title: 'Gender', field: 'gender', lookup: { 1: 'M', 2: 'F' }},
      { title: 'Race', field: 'race', lookup: { 1: '10k', 2: '21k', 3: '42k' },  },
      { title: 'Category', field: 'category', lookup: { 1: 'F18-34', 2: 'F35', 3: 'M18-34', 4: 'M35' }, },
      { title: 'Registration Status', field: 'registrationStatus', lookup: { 1: 'New', 2: 'Confirmed', 3: 'Canceled'}, },
    ],
    data: [
      { bib: '123', firstName: 'John', lastname: 'Doe', gender: 1, race: 1, category: 1, registrationStatus: 1},
    ],
  });

  const addIdentityCard = (data) => {
    this.props.handleCreateCsvDocument(data);
  }

  return (
    <MaterialTable
      title="Registration Status"
      columns={state.columns}
      data={state.data}
      icons={{ 
        Check: Check,
        DetailPanel: ChevronRight,
        Delete: DeleteOutline,
        Export: SaveAlt,
        Filter: FilterList,
        FirstPage: FirstPage,
        LastPage: LastPage,
        NextPage: ChevronRight,
        PreviousPage: ChevronLeft,
        Search: Search,
        ThirdStateCheck: Remove,
        Add: Add,
        SortArrow: ArrowDownward,
        Clear: Clear,
        Edit: Edit,
        ViewColumn: ViewColumn
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default CustomTable;