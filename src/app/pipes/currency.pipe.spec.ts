import {CurrenciesPipe} from './currencies.pipe';

describe('currenciePipe', () => {
  const pipe = new CurrenciesPipe();
  const testArray = [
    {
      id: '1',
      name: 'testName',
      code: 'testCode',
      type: 'testType'
    },
    {
      id: '2',
      name: 'testName',
      code: 'testCode',
      type: 'testType'
    },
    {
      id: '3',
      name: 'testName',
      code: 'testCode',
      type: 'testType'
    }
  ];
  const options = {
    pipeOption: 'id',
    pipeText: '1'
  };

  it('should return the new array filtered by id', () => {
    expect(pipe.transform(testArray, options)[0])
      .toBe(testArray.filter( item => item.id === options.pipeText)[0]);
  });

  it('should return the new array filtered by name', () => {
    options.pipeOption = 'name';
    expect(pipe.transform(testArray, options)[0])
      .toBe(testArray.filter( item => item.name === options.pipeText)[0]);
  });

  it('should return the new array filtered by code', () => {
    options.pipeOption = 'code';
    expect(pipe.transform(testArray, options)[0])
      .toBe(testArray.filter( item => item.code === options.pipeText)[0]);
  });

  it('should return the new array filtered by type', () => {
    options.pipeOption = 'type';
    expect(pipe.transform(testArray, options)[0])
      .toBe(testArray.filter( item => item.type === options.pipeText)[0]);
  });
});
