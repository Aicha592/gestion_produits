import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equipe'
})
export class EquipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
