import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Alumno } from "src/app/models/alumno";
import { Curso } from 'src/app/models/curso';
import { AlumnosServService } from 'src/app/servicios/alumnos-serv.service';
import { CursosServService } from 'src/app/servicios/cursos-serv.service';
import { TodosLosCursosComponent } from '../todos-los-cursos/todos-los-cursos.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {
  filtro!: string;

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombre', 'apellido', 'correo', 'inscriptoDesde', 'habilitado' ];
  suscripcion!: Subscription;

  cursos: any;
  cursos$!: Observable<Curso[]>
  constructor(
    private alumnosServ: AlumnosServService,
    private cursosServ: CursosServService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    // this.cursos = this.cursosServ.obtenerCursoPromise().then((cursos: Curso[])=>{
    //   this.cursos = cursos;
    // }).catch((error: any) =>{
    //   console.log('Hubo un error en el promise', error)
    // })
    // this.suscripcion = this.cursosServ.obtenerCursoObservable().subscribe((cursos: Curso[]) =>{
    //   this.cursos = cursos;
    // })
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnosServ.obtenerAlumnoObservable().subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos;
    });
    this.cursos$ = this.cursosServ.obtenerCursoObservable();
    this.cursos$.subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    })
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  abrirModal(curso: Curso) {
    const dialogRef = this.dialog.open(TodosLosCursosComponent, {
      data: curso
    })
  }
}
