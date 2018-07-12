import {Component, OnChanges, OnInit} from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {Currency} from '../../model/Currencies';

@Component({
  selector: 'home-currencies',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  currencies: Currency;
  currenciesNumber = 10;
  pipeText = '';
  pipeOption = 'name';
  isLoading = true;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.currencies);
  }

  getHeroes(): void {
    this.currencyService.getCurrencies()
    .subscribe(currencies => {
      this.isLoading = false;
      this.currencies = currencies;
    });
  }
}
