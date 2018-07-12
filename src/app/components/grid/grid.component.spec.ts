import { TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CurrencyService } from '../../services/currency.service';
import { CurrenciesPipe} from '../../pipes/currencies.pipe';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent} from '../paginator/paginator.component';
import { SearchComponent } from '../search/search.component';

describe('GridComponent', () => {
  let CurrencyServiceStub: Partial<any>;
  // Creating a stub of the currencyService (we should not use the real one)
  CurrencyServiceStub = {
    getCurrency: () => {},
    getCurrencies: () => {}
  };
  it('should be created', () => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent, CurrenciesPipe, PaginatorComponent, SearchComponent ],
      imports: [ FormsModule, NgxPaginationModule, RouterModule, LoadingModule, NgbModule ],
      providers: [ {provide: CurrencyService, useValue: CurrencyServiceStub } ]
    });
    const fixture = TestBed.createComponent(GridComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
