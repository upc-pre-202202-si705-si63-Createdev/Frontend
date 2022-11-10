import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-dialogo',
  templateUrl: './clientes-dialogo.component.html',
  styleUrls: ['./clientes-dialogo.component.css']
})
export class ClientesDialogoComponent implements OnInit {

  constructor(private clienteservice:ClientesService,  
  private dialogRef: MatDialogRef<ClientesDialogoComponent>  ) { }
  

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.clienteservice.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
