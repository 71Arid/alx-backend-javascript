import {RowElement, RowID} from './interface'

export function insertRow(row: RowElement): RowID;
export function deleteRow(row: RowId): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
