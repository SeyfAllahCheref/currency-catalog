import { CurrencyService } from './currency.service';
import { of } from 'rxjs/index';



let httpClientSpy: { get: jasmine.Spy };
let handlerErrorSpy: { handleError: jasmine.Spy };
let currencyService: CurrencyService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  handlerErrorSpy = jasmine.createSpyObj('HanderError', ['handleError']);
  currencyService = new CurrencyService(<any> httpClientSpy, <any> handlerErrorSpy);
});

it('should return expected currencie (HttpClient called once)', () => {
  const expectedCurrencies = of([{ id: 1, name: 'A' }, { id: 2, name: 'B' }])
    ;

  httpClientSpy.get.and.returnValue(expectedCurrencies).and.returnValue([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]);

  currencyService.getCurrencies().subscribe(
    currencies => expect(currencies).toEqual(expectedCurrencies, 'expected currencies'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

