import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent } from './form/form.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'login', component: FormComponent,},
  { path: 'page', component: PageComponent,},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }