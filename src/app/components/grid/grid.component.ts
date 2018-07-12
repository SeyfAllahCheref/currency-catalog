import {Component, OnChanges, OnInit} from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {Currency} from '../../model/Currencies';

@Component({
  selector: 'grid-currencies',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  currencies: Currency;
  isLoading = true;
  constructor(private currencyService: CurrencyService) { }

  onChanges($event) {
    this.currencies = $event;
    this.isLoading = false;
  }
}
