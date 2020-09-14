import { IMPORT_CSV, CREATE_CSV, UPDATE_CSV, DELETE_CSV } from './types'
import IdentityDocument from '../../models/IdentityDocument';

export const importCsv = (data) => {
  const loadedIdentityDocument = [];

  for (let index = 1; index < data.length; index++) {
    loadedIdentityDocument.push(
      new IdentityDocument(
        data[index].data[0],
        data[index].data[1],
        data[index].data[2],
        data[index].data[3],
        data[index].data[4],
        data[index].data[5],
        data[index].data[6],
      )
    )
    
  }
  return {
    type: IMPORT_CSV,
    csvItemsList: loadedIdentityDocument
  };
};

export const createIdentityDocument = document => {
  const newIdentityDocument =  new IdentityDocument(
    document.bib,
    document.firstName,
    document.lastName,
    document.gender,
    document.race,
    document.category,
    document.registrationStatus,
  );
  return {
    type: CREATE_CSV,
    newIdentityDocument: newIdentityDocument
  };
}

export const updateIdentityDocument = document => {
  
}

export const deleteIdentityDocument = document => {
  
}