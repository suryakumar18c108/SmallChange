import { Component, Input, OnInit } from '@angular/core';
import { ColDef, Column, GridOptions } from 'ag-grid-community';
import { columnDefsCash } from './grid-config';

@Component({
  selector: 'app-cash-account-type',
  templateUrl: './cash-account-type.component.html',
  styleUrls: ['./cash-account-type.component.css'],
})
export class CashAccountTypeComponent implements OnInit {
  @Input() cashCashData: any[] = [];

  columnDefsCash = columnDefsCash;

  constructor() {}

  ngOnInit(): void {}

  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
    },
    columnDefs: this.columnDefsCash,
    rowData: this.cashCashData,
    domLayout: 'autoHeight',
    // onGridReady: () => this.autoSizeAll(false),
  };

  autoSizeAll(skipHeader: boolean | undefined) {
    this.gridOptions.api?.sizeColumnsToFit();
  }
}
