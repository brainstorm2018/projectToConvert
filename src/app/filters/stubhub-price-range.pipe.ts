import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stubhubPriceRange'
})
export class StubhubPriceRangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
