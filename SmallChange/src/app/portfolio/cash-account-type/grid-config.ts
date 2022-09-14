import { ColDef } from 'ag-grid-community';
import { GridUtil } from '../portfolio-page/grid-util';

export const columnDefsCash: ColDef[] = [
  { field: 'date', resizable: true, },
  { field: 'type', resizable: true, sortable: true },
  { field: 'description', resizable: true, sortable: true },
  {
    field: 'amount',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
    cellStyle: (params) => GridUtil.cellStyleLoss(params.value)
  },
  {
    field: 'balance',
    resizable: true,
    sortable: true,
    valueFormatter: (params) => GridUtil.currencyValueFormatter(params),
    cellStyle: (params) => GridUtil.cellStyleLoss(params.value)
  },
];
