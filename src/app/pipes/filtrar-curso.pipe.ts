import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';

@Pipe({
  name: 'filtrarCurso'
})
export class FiltrarCursoPipe implements PipeTransform {
  transform(cursos: Curso[], filtro: string): Curso[] {
    return cursos.filter((curso) => {
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    });
  }

}
