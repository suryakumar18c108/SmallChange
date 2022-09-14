import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CASH_CASH_ITEMS } from './mock-cash-cash-items';
import { INVESTING_ETF_ITEMS } from './mock-investing-etf-items';
import { INVESTING_STOCK_ITEMS } from './mock-investing-stock-items';
import { MARGIN_STOCK_ITEMS } from './mock-margin-stock-items';
import { CashCashItem } from './model/cash-cash-item';
import { InvestingEtfItem } from './model/investing-etf-item';
import { InvestingStockItem } from './model/investing-stock-item';
import { MarginStockItem } from './model/margin-stock-item';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  getInvestingStockItems(): Observable<InvestingStockItem[]> {
    return of(INVESTING_STOCK_ITEMS);
  }

  getInvestingEtfItems(): Observable<InvestingEtfItem[]> {
    return of(INVESTING_ETF_ITEMS);
  }

  getCashCashItems(): Observable<CashCashItem[]> {
    return of(CASH_CASH_ITEMS);
  }

  getMarginStockItems(): Observable<MarginStockItem[]> {
    return of(MARGIN_STOCK_ITEMS);
  }
}
