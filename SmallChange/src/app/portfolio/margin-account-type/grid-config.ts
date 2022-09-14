import { ColDef } from 'ag-grid-community';
import { GridUtil } from '../portfolio-page/grid-util';

export const columnDefsMargin: ColDef[] = [
  { field: 'ticker', resizable: true, sortable: true, pinned: 'left' },
  { field: 'name', resizable: true, sortable: true },
  { field: 'quantity', resizable: true, sortable: true },
  {
    field: 'price',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
  },
  {
    field: 'bookValue',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
  },
  {
    field: 'marketValue',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
  },
  {
    field: 'gainOrLoss',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencySignedValueFormatter(params),
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
  },
  {
    field: 'gainOrLossPercent',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.percentValueFormatter(params),
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
  },
  {
    field: 'percentageOfHoldings',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.percentUnsignedValueFormatter(params),
  },
];
