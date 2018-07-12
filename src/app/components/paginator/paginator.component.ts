import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../model/Currencies';

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

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrencies(this.pageNumber, this.currenciesByPage, null, null);
  }

  pageChange($event): void {
    this.getCurrencies(this.pageNumber, this.currenciesByPage, null, null);
    this.outputCurrencies.emit(this.currencies);
  }

  getCurrencies( pageNumber: number, currenciesByPage: number, filter: string, filterText: string): void {
    this.currencyService.getCurrencies(this.pageNumber, this.currenciesByPage, filter, filterText)
    .subscribe(currencies => {
      this.currencies = currencies;
      this.outputCurrencies.emit(currencies);
    });
  }

  applyFilter($event): void {
    console.log($event);
    this.getCurrencies(this.pageNumber, this.currenciesByPage, $event.searchBy, $event.searchText);
    if ($event.searchBy === '' && $event.searchText === '') {
      this.getCurrencies(this.pageNumber, this.currenciesByPage, null, null);
    } else {
      this.getCurrencies(this.pageNumber, this.currenciesByPage, $event.searchBy, $event.searchText);
    }
  }

  changeNumber($event) {
    this.pageChange($event);
  }
}
