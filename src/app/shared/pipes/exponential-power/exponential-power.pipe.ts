// Here is an example of how we can add more than one argument to a pipe and return a value;

// This is an example of a pure pipe, which means the input and output will always do the same thing, ie a value and exponent will return the values exportation value.
 
// In the template format it would read ==> {{value | exponentialPower: secondValue}}
// Theoretically you can add more arguments ==> {{value | exponentialPower: secondValue: thirdValue: fourthValue}}

// Its important to note that if the value given is a pipe, if you mutate or change the input array, the pure pipe doesn't execute. 
// If you replace the input array, the pipe executes and the display is updated.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponentialPower',
    standalone: true
})
export class ExponentialPowerPipe implements PipeTransform {
  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }



}
 