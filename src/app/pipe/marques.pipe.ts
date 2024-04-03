import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marques'
})
export class MarquesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
