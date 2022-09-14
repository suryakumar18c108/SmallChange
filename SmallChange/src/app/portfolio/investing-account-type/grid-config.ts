import { ColDef } from 'ag-grid-community';
import { GridUtil } from '../portfolio-page/grid-util';

export const columnDefsStock: ColDef[] = [
  { field: 'ticker', headerName: 'Ticker', resizable: true, sortable: true ,pinned:'left' },
  { field: 'name', resizable: true, sortable: true },
  { field: 'price', resizable: true, sortable: true },
  {
    field: 'precentChange',
    headerName: '% change',
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
    valueFormatter: (params) => GridUtil.percentValueFormatter(params),
  },
  {
    field: 'change',
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
    valueFormatter: (params) => GridUtil.currencySignedValueFormatter(params),
  },
  { field: 'shares', resizable: true, sortable: true },
  {
    field: 'avgCost',
    headerName: 'Avg. cost',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
  },
  {
    field: 'totalCost',
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
    field: 'gain',
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
    valueFormatter: (params) => GridUtil.currencySignedValueFormatter(params),
  },
  {
    field: 'daysGain',
    headerName: "Day's gain",
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
    valueFormatter: (params) => GridUtil.currencySignedValueFormatter(params),
  },
  {
    field: 'return',
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
    valueFormatter: (params) => GridUtil.percentValueFormatter(params),
  },
];

export const columnDefsEtf: ColDef[] = [
  { field: 'Ticker', resizable: true, sortable: true ,pinned:'left' },
  {
    field: 'Fund_Name',
    headerName: 'Fund Name',
    resizable: true,
    sortable: true,
  },
  { field: 'Issuer', resizable: true, sortable: true },
  {
    field: 'AUM_bil',
    headerName: 'AUM [billion USD]',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyBillionValueFormatter(params)
  },
  {
    field: 'Expense_Ratio',
    headerName: 'Expense Ratio',
    resizable: true,
    sortable: true,
  },
  {
    field: 'ThreeMoTR',
    headerName: '3 Month TR',
    resizable: true,
    sortable: true,
    cellStyle: (params) => GridUtil.cellStyleProfitLoss(params.value),
  },
  { field: 'Segment', resizable: true, sortable: true },
];
