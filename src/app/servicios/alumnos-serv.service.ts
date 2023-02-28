import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServService {
  private   alumnos: Alumno []= [
    {
      nombre: 'Federico',
      apellido: 'Nuñez',
      correo: 'fede@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 10, 13)
    },
    {
      nombre: 'Soledad',
      apellido: 'Defrance',
      correo: 'sole@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 4, 8)
    },
    {
      nombre: 'Romina',
      apellido: 'Gomez',
      correo: 'romi@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2021, 11, 20)
    },
    {
      nombre: 'Francisco',
      apellido: 'Pope',
      correo: 'pope@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2019, 8, 25)
    },
    {
      nombre: 'Ayelen',
      apellido: 'Santos',
      correo: 'aye@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2017, 3, 2)
    },
    {
      nombre: 'Pepe',
      apellido: 'Quiroz',
      correo: 'pepe@gmail',
      contrasenia: 'asdf1234',
      habilitado: true,
      inscriptoDesde: new Date(2022, 10, 13)
    },
  ]

  constructor() { }
  obtenerAlumnoObservable(): Observable<Alumno[]> {
    return new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.alumnos);
    })
  }
}
