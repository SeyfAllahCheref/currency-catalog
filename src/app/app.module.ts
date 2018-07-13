import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { CurrencyDetailsComponent } from './components/currency/currency-details.component';
import { SearchComponent } from './components/search/search.component';
import { PaginatorComponent} from './components/paginator/paginator.component';

import { CurrencyService } from './services/currency.service';

@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    LoadingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    GridComponent,
    CurrencyDetailsComponent,
    PaginatorComponent,
    SearchComponent
  ],
  providers: [ CurrencyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
