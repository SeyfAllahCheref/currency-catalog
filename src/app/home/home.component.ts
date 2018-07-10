import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'home-currencies',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currencies = [];
  currenciesNumber = 10;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getHeroes();
    console.log(this.currencies);
  }

  getHeroes(): void {
    this.currencyService.getCurrencies()
    .subscribe(currencies => this.currencies = currencies.data);
  }
}
