import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoATexto'
})
export class BooleanoATextoPipe implements PipeTransform {

  transform(habilitado: Boolean, ...args: any[]): String {
    return habilitado ? args[0] : args[1];
  }

}
