import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './components/grid/grid.component';
import { CurrencyDetailsComponent } from './components/currency/currency-details.component';
import { CurrenciesResolver } from './resolvers/currency.resolver';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'currency/:id',
    component: CurrencyDetailsComponent,
    resolve: { currency: CurrenciesResolver }},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CurrenciesResolver ]
})
export class AppRoutingModule {}
