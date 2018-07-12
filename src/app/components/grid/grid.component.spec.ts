import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './grid.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyService } from '../../services/currency.service';
import { CurrenciesPipe} from '../../pipes/currencies.pipe';
import { RouterModule, Routes } from '@angular/router';

describe('HomeComponent', () => {
  let CurrencyServiceStub: Partial<any>;
  // Creating a stub of the currencyService (we should not use the real one)
  CurrencyServiceStub = {
    getCurrency: () => {},
    getCurrencies: () => {}
  };
  it('should be created', () => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, CurrenciesPipe ],
      imports: [ FormsModule, NgxPaginationModule, RouterModule ],
      providers: [ {provide: CurrencyService, useValue: CurrencyServiceStub } ]
    });
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
