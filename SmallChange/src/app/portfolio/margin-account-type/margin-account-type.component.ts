import { Component, Input, OnInit } from '@angular/core';
import { ColDef, Column, GridOptions } from 'ag-grid-community';
import { columnDefsMargin } from './grid-config';

@Component({
  selector: 'app-margin-account-type',
  templateUrl: './margin-account-type.component.html',
  styleUrls: ['./margin-account-type.component.css'],
})
export class MarginAccountTypeComponent implements OnInit {
  @Input() marginStockData: any[] = [];

  columnDefsMargin = columnDefsMargin;
  marketValue = 0;
  gainLoss = 0;
  gainLossPercent = 0;
  bookValue = 0;
  constructor() {}
  ngOnInit(): void {
    this.getMarketValue();
    this.getGainLossValue();
    this.getGainLossPercent();
  
  }

  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
    },
    columnDefs: this.columnDefsMargin,
    rowData: this.marginStockData,
    // onGridReady: () => this.autoSizeAll(false),
    domLayout: 'autoHeight',
  };

  autoSizeAll(skipHeader: boolean | undefined) {
    const allColumnIds: (string | Column)[] = [];
    this.gridOptions.columnApi?.getColumns()?.forEach((column) => {
      allColumnIds.push(column.getId());
    });
    this.gridOptions.columnApi?.autoSizeColumns(allColumnIds, skipHeader);
  }
  getMarketValue(): string {

    for (var i = 0; i < this.marginStockData.length; i++) {
      this.marketValue = this.marketValue + this.marginStockData[i].marketValue;
    }
    return this.marketValue.toString();
  }
  getGainLossValue(): string {
    for (var i = 0; i < this.marginStockData.length; i++) {
      this.gainLoss = this.gainLoss + this.marginStockData[i].gainOrLoss;
    }
    return this.gainLoss.toString();
  }
  getGainLossPercent(): string {
    for (var i = 0; i < this.marginStockData.length; i++) {
      this.bookValue = this.bookValue + this.marginStockData[i].bookValue;
      // console.log(this.gainLoss)
    }
    this.gainLossPercent = (this.gainLoss / this.bookValue) * 100;
    return this.gainLossPercent.toString();
  }
}
