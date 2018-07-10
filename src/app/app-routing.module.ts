import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CurrencyDetailsComponent } from './components/currency/currency-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
