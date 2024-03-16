import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coach'
})
export class CoachPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
