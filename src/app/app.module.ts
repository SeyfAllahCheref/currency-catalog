import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CurrencyDetailsComponent } from './components/currency/currency-details.component';
import { CurrenciesPipe} from './pipes/currencies.pipe';

@NgModule({
  imports: [
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyDetailsComponent,
    CurrenciesPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
