import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currenciesPipe'})

export class CurrenciesPipe implements PipeTransform {
  transform(array: any[], options: any): any {
    if (options.pipeOption === 'name' && options.pipeText !== '') {
      return array.filter(item => item.name === options.pipeText);
    } else if (options.pipeOption === 'type' && options.pipeText !== '') {
      return array.filter(item => item.type === options.pipeText);
    } else if (options.pipeOption === 'code' && options.pipeText !== '') {
      return array.filter(item => item.code === options.pipeText);
    } else {
      return array;
    }
  }
}
