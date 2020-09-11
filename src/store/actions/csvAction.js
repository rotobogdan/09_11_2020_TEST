import { IMPORT_CSV } from './types'

export const importCsv = (data) => {
  return {
    type: IMPORT_CSV,
    csvItemsList: data
  };
};