import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
private allCurrencyUrl = 'https://api.openfintech.io/v1/currencies?page[size]=200';
private currencyUrl = 'https://api.openfintech.io/v1/currencies';

  constructor(private http: HttpClient) {
  }

  getCurrencies(): Observable<any> {
    return this.http.get<any>(this.allCurrencyUrl)
      .pipe(
        tap(heroes => this.log(`currencies fetched`)),
        catchError(this.handleError<any>('getCurrencies', []))
      );
  }

  getCurrency(id: string): Observable<any> {
    const url = `${this.currencyUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => this.log(`currency with id=${id} fetched`)),
      catchError(this.handleError<any>(`getCurrency id=${id}`));
    );
  }
}
