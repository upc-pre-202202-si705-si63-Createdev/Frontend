import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pedido-dialogo',
  templateUrl: './pedido-dialogo.component.html',
  styleUrls: ['./pedido-dialogo.component.css']
})
export class PedidoDialogoComponent implements OnInit {

  constructor(private pedidoService: PedidoService,
    private dialogRef: MatDialogRef<PedidoDialogoComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.pedidoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
