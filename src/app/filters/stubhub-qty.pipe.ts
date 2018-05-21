import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stubhubQty'
})
export class StubhubQtyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
