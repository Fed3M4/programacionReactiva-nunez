import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ABMComponent } from '../abm/abm.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private dialog: MatDialog
  ) {}
  registrarse() {
    const dialogRef = this.dialog.open(ABMComponent)
  }
}
