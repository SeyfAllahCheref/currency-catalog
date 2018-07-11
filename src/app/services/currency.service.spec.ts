import { CurrencyService } from './currency.service';
import { of } from 'rxjs/index';
import { asyncData } from '../../testing/async-observable-helpers';

let httpClientSpy: { get: jasmine.Spy };
let handlerErrorSpy: { handleError: jasmine.Spy };
let currencyService: CurrencyService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  handlerErrorSpy = jasmine.createSpyObj('HanderError', ['handleError']);
  currencyService = new CurrencyService(<any> httpClientSpy, <any> handlerErrorSpy);
});

it('should return expected currencie (HttpClient called once)', () => {
  // First create an Observable that contains the expected result of the call
  const expectedCurrencies = of([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]);

  // Now mock the call to the HttpClient and return the wished result
  httpClientSpy.get.and.returnValue(asyncData(expectedCurrencies));

  // const r = expectedCurrencies.value
  // Then test the that the service will return the same result
  currencyService.getCurrencies().subscribe(
    currencies => expect(currencies).toEqual(expectedCurrencies, 'expected currencies')
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
