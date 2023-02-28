import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    // private cursos$!: Observable<Curso[]>;
    private cursos$!: BehaviorSubject<Curso[]>;
      constructor() {
        // this. cursos$ = new Observable<Curso[]>((suscriptor) => {
        //   suscriptor.next(this.cursos);
        // })
        this.cursos$ = new BehaviorSubject(this.cursos);
      }

  obtenerCursoPromise(): Promise<Curso[]> {
    return new Promise((resolve, reject) =>{
      if(this.cursos.length > 0) {
        resolve(this.cursos);
      } else {
        reject({
          codigo: 0,
          descripcion: 'El array esta vacío',
          data: []
        });
      }
    })
  }
  // obtenerCursoObservable(): Observable<Curso[]> {
  //   return this.cursos$;
  // }
  obtenerCursoObservable(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }
}
