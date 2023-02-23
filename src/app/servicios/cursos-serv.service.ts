import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosServService {
  private cursos: Curso[] =  [
      {
        nombre: 'Operaciones',
        profesor: {
          nombre: 'Alejandro',
          mail: 'aleta@mail.com'
        },
        duracion: '3 meses',
        comision: 1234
      },
      {
        nombre: 'Ventas',
        profesor: {
          nombre: 'Ivo',
          mail: 'ivo@mail.com'
        },
        duracion: '1 meses',
        comision: 1235
      },
      {
        nombre: 'Fraudes',
        profesor: {
          nombre: 'Rocío',
          mail: 'rocampo@mail.com'
        },
        duracion: '6 meses',
        comision: 1236
      },
      {
        nombre: 'Ingles',
        profesor: {
          nombre: 'Leandro',
          mail: 'lean@mail.com'
        },
        duracion: '24 meses',
        comision: 1237
      }
    ];
      constructor() {}

  obtenerCurso(): Array<Curso> {
    return this.cursos
  }
}
