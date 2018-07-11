import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyDetailsComponent } from './currency-details.component';
import { CurrencyService } from '../../services/currency.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

describe('CurrencyDetailsComponent', () => {
  let CurrencyServiceStub: Partial<any>;
  let ActivatedRouteStub: Partial<any>;
  let LocationStub: Partial<any>;

  // Creating a stub of the currencyService (we should not use the real one)
  CurrencyServiceStub = {};
  ActivatedRouteStub = {};
  LocationStub = {};

  it('should be created', () => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyDetailsComponent ],
      imports: [ RouterModule ],
      providers: [
        {provide: CurrencyService, useValue: CurrencyServiceStub },
        {provide: ActivatedRoute, useValue: ActivatedRouteStub },
        {provide: Location, useValue: LocationStub }
      ]
    });
    const fixture = TestBed.createComponent(CurrencyDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
