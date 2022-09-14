import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ColDef,
  Column,
  GridOptions,
  ValueFormatterParams,
} from 'ag-grid-community';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioPageComponent implements OnInit {
  investingStockData: any[] = [];
  investingEtfData: any[] = [];
  cashCashData: any[] = [];
  marginStockData: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.getInvestingAccount();
    this.getCashAccount();
    this.getMarginAccount()
  }

  getInvestingAccount() {
    this.portfolioService
      .getInvestingStockItems()
      .subscribe((data) => (this.investingStockData = data));
    this.portfolioService
      .getInvestingEtfItems()
      .subscribe((data) => (this.investingEtfData = data));
    // this.cashCashData = [];
    // this.marginStockData = [];
  }

  getCashAccount() {
    this.portfolioService
      .getCashCashItems()
      .subscribe((data) => (this.cashCashData = data));
    // this.investingEtfData = [];
    // this.investingStockData = [];
    // this.marginStockData = [];
  }

  getMarginAccount() {
    this.portfolioService
      .getMarginStockItems()
      .subscribe((data) => (this.marginStockData = data));
    // this.investingEtfData = [];
    // this.investingStockData = [];
    // this.cashCashData = [];
  }
}
