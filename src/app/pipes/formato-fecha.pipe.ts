import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {

  transform(fecha: Date): String {
    return `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
  }

}
