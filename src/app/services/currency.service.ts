import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {map, retry} from 'rxjs/internal/operators';

import { environment } from '../../environments/environment';
import { HandlerError } from '../shared/handlerError';
import {Currency, CurrencyData} from '../model/Currencies';


@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
private allCurrencyUrl = environment.allCurrencyUrl;
private currencyUrl = environment.currencyUrl;

  constructor(private http: HttpClient, private handler: HandlerError) {}

  /**
   * Gets a list of currencies
   *
   * @returns {Observable<any>}
   */
  getCurrencies(): Observable<Currency> {
    return this.http.get<Currency>(this.allCurrencyUrl).pipe(
      map(currencies => currencies),
      retry(2), // retry a failed request up to 3 times
      catchError(this.handler.handleError) // then handle the error
    );
  }

  /**
   * Get a currency by its id
   *
   * @param id the currency identifier
   * @returns {Observable<any>}
   */
  getCurrency(id: string): Observable<CurrencyData> {
    const url = `${this.currencyUrl}/${id}`;
    return this.http.get<CurrencyData>(url).pipe(
      map(currency => currency),
      retry(2), // retry a failed request up to 3 times
      catchError(this.handler.handleError) // then handle the error
    );
  }
}
