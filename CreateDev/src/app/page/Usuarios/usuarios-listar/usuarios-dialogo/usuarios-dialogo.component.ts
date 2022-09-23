import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-dialogo',
  templateUrl: './usuarios-dialogo.component.html',
  styleUrls: ['./usuarios-dialogo.component.css']
})
export class UsuariosDialogoComponent implements OnInit {

  constructor(private UsuariosService:UsuariosService, private dialogRef: MatDialogRef<UsuariosDialogoComponent> ) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.UsuariosService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
