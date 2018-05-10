import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg>1000)
    return "code 20 (20% off)";
    else if (arg>2000)
    return "code 10 (10% off)";
    else if (arg>3000)
    return "code 8 (8% off)";
    else return "offer5(5% off)";
  }

}
