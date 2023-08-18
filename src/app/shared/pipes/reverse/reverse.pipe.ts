// This is a custom pipe. I am simply taking a value which has to be a string, splitting it into and array, reversing the array,
// and finally joining the array back into a string
// notice how the function only allows a string to be used and it only returns a string.


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }

}
