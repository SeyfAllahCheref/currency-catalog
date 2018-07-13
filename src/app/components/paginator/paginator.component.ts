import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/Currencies';

@Component({
  selector: 'currencies-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  currencies: Currency;
  @Output() outputCurrencies = new EventEmitter<Currency>();
  currenciesByPage = 10;
  pageNumber = 1;
  notFound = false;
  isLoading = true;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies(this.pageNumber, this.currenciesByPage, null, null);
  }

  pageChange($event): void {
    this.getCurrencies(this.pageNumber, this.currenciesByPage, null, null);
    this.outputCurrencies.emit(this.currencies);
  }

  getCurrencies( pageNumber: number, currenciesByPage: number, filter: string, filterText: string): void {
    this.isLoading = true;
    this.currencyService.getCurrencies(this.pageNumber, this.currenciesByPage, filter, filterText)
    .subscribe(currencies => {
      this.currencies = currencies;
      this.notFound = this.currencies.meta.total === 0;
      this.outputCurrencies.emit(currencies);
      this.isLoading = false;
    });
  }

  applyFilter($event): void {
    console.log($event);
    this.getCurrencies(this.pageNumber, this.currenciesByPage, $event.searchBy, $event.searchText);
  }

  changeNumber($event) {
    this.pageChange($event);
  }
}
