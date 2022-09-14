import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AgGridModule } from 'ag-grid-angular';
import { InvestingAccountTypeComponent } from './investing-account-type/investing-account-type.component';
import { CashAccountTypeComponent } from './cash-account-type/cash-account-type.component';
import { MarginAccountTypeComponent } from './margin-account-type/margin-account-type.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    PortfolioPageComponent,
    InvestingAccountTypeComponent,
    CashAccountTypeComponent,
    MarginAccountTypeComponent,
  ],
  imports: [CommonModule, AgGridModule, MatTabsModule],
  exports: [PortfolioPageComponent],
})
export class PortfolioModule {}
