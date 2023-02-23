import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class ABMComponent {
  formularioLogin: FormGroup;


  constructor(
    private dialogRef: MatDialogRef<ABMComponent>
  ){
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$' //aca definimos la expresion regular que usamos en el pattern
    let controles: any = {
      correo: new FormControl('ejemplo@gmail.com', [Validators.required, Validators.pattern(regexCorreo)]),
      contrasenia: new FormControl('contrasenia123', [Validators.minLength(5), Validators.required]),
      recordarCredenciales: new FormControl(true, [])
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login() {
    console.log(this.formularioLogin);
    if(this.formularioLogin.controls['correo'].errors?.['pattern'])
    console.log('Hubo un error en el formato del correo');
    if(this.formularioLogin.controls['correo'].errors?.['required'])
    console.log('Correo no puede estar vacío')
  }
}
