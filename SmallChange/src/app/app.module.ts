import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { FormComponent } from './form/form.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { PortfolioModule } from './portfolio/portfolio.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridColumn, AgGridModule } from 'ag-grid-angular';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    FormComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PortfolioModule,
    BrowserAnimationsModule,
    AgGridModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
