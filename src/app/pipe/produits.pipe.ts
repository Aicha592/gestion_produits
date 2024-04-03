import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produits'
})
export class ProduitsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
