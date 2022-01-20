import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPower'
})
export class ExponentialPowerPipe implements PipeTransform {

  transform(value: number, value2: number): number {
    return value * value2;
  }

}
