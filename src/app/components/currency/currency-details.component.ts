import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CurrencyService } from '../../services/currency.service';
import { CurrencyData } from '../../models/Currencies';

@Component({
  selector: 'currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: [ './currency-details.component.css' ]
})
export class CurrencyDetailsComponent implements OnInit {
  currency: CurrencyData;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private currencyService: CurrencyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency(): void {
   this.currency = this.route.snapshot.data.currency.data;
   this.isLoading = false;
  }

  goBack(): void {
    this.location.back();
  }
}
