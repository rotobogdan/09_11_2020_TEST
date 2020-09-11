import {IMPORT_CSV} from '../actions/types';

const initialState = {
  csvItemsList: [],
};

const csvReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_CSV:
      return {
        csvItemsList: action.csvItemsList,
      };
  }

  return state;
};

export default csvReducer;