import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {

  transform(value: string):any {
    if(value === undefined || value === null){
      return;
    }
    let retNumber = Number(value.toString().replace(',',''));
    return isNaN(retNumber) ? 0 : retNumber;
}

}
