import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './components/grid/grid.component';
import { CurrencyDetailsComponent } from './components/currency/currency-details.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
