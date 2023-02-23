import { Component, OnInit, Output, Inject } from '@angular/core';
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

  ngOnInit(): void {
    this.cursos = this.cursosServ.obtenerCurso();
  }
}
