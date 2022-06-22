/// <reference path="crud.d.ts" />
import * as CRUD from './crud'
import { updateRow } from './crud';
import { deleteRow } from './crud';
import { insertRow } from './crud';
import { RowID, RowElement } from './interface';


const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = insertRow;
const updatedRow: RowElement = 23;

updateRow
deleteRow