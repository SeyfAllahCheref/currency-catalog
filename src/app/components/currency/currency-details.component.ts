import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: [ './currency-details.component.css' ]
})
export class CurrencyDetailsComponent implements OnInit {
  @Input() currency: {};

  constructor(
    private route: ActivatedRoute,
    private currencyService: CurrencyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.currencyService.getCurrency(id)
      .subscribe(currency => this.currency = currency.data);
  }

  goBack(): void {
    this.location.back();
  }
}
