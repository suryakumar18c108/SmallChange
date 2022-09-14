import { Component, Input, OnInit } from '@angular/core';
import {
  ColDef,
  Column,
  GridOptions,
  ValueFormatterParams,
} from 'ag-grid-community';
import { columnDefsEtf, columnDefsStock } from './grid-config';

@Component({
  selector: 'app-investing-account-type',
  templateUrl: './investing-account-type.component.html',
  styleUrls: ['./investing-account-type.component.css'],
})
export class InvestingAccountTypeComponent implements OnInit {
  @Input() investingStockData: any[] = [];
  @Input() investingEtfData: any[] = [];

  columnDefsStock = columnDefsStock;
  columnDefsEtf = columnDefsEtf;

  gridOptionsStock: GridOptions = {
    defaultColDef: {
      resizable: true,
    },
    columnDefs: this.columnDefsStock,
    rowData: this.investingStockData,
    // onGridReady: () => this.autoSizeAllStock(false),
  };

  gridOptionsEtf: GridOptions = {
    defaultColDef: {
      resizable: true,
    },
    columnDefs: this.columnDefsEtf,
    rowData: this.investingEtfData,
    // onGridReady: () => this.autoSizeAllEtf(false),
  };

  constructor() {}
  total = '';

  ngOnInit(): void {
    this.total = this.getTotalReturnData();
  }
  totalCost = 0;
  marketValue = 0;
  autoSizeAllStock(skipHeader: boolean | undefined) {
    const allColumnIds: (string | Column)[] = [];
    this.gridOptionsStock.columnApi?.getColumns()?.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridOptionsStock.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
  }

  autoSizeAllEtf(skipHeader: boolean | undefined) {
    const allColumnIds: (string | Column)[] = [];
    this.gridOptionsEtf.columnApi?.getColumns()?.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridOptionsEtf.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
  }


  getTotalReturnData(): string {
    for (var i = 0; i < this.investingStockData.length; i++) {
      let a: number = this.investingStockData[i].totalCost;
      let b: number = this.investingStockData[i].marketValue;

      this.totalCost = this.totalCost + (a ? a : 0);
      // console.log('cost', this.totalCost);
      this.marketValue = this.marketValue + (b ? b : 0);
    }
    let totalString = (this.marketValue - this.totalCost).toFixed(2);

    return totalString;
  }
}
