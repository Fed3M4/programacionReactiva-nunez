import { Component, OnInit, Inject } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursosServService } from 'src/app/servicios/cursos-serv.service';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-todos-los-cursos',
  templateUrl: './todos-los-cursos.component.html',
  styleUrls: ['./todos-los-cursos.component.css']
})
export class TodosLosCursosComponent implements OnInit {
  cursos!: Curso[];
  constructor(
    private cursosServ: CursosServService,
    private dialogRef: MatDialogRef<TodosLosCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
    ) {}

  ngOnInit(): any {
    this.cursosServ.obtenerCursoPromise().then((cursos: Curso[]) => {
      this.cursos = cursos
    }).catch((error: any) => {
      console.log('Hubo un error en el Promise', error)
    });
  }
}
