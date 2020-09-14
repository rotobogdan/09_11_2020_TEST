import { IMPORT_CSV, CREATE_CSV, UPDATE_CSV, DELETE_CSV } from '../actions/types';

const initialState = {
  csvItemsList: [],
};

const csvReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_CSV:
      return {
        csvItemsList: action.csvItemsList,
      };
    case CREATE_CSV:
      return {
        ...state,
        csvItemsList: state.csvItemsList.concat(action.newIdentityDocument),
      }
  }

  return state;
};

export default csvReducer;