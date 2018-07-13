import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { CurrencyData } from '../models/Currencies';

@Injectable()
export class CurrenciesResolver implements Resolve<Observable<CurrencyData>> {
  constructor(private currencyService: CurrencyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CurrencyData> {
    return this.currencyService.getCurrency(route.params.id);
  }
}
