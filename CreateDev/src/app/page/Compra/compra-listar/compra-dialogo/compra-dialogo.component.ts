import { PedidoService } from './../../../../service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/service/compra.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-compra-dialogo',
  templateUrl: './compra-dialogo.component.html',
  styleUrls: ['./compra-dialogo.component.css']
})
export class CompraDialogoComponent implements OnInit {

  constructor(private compraService : CompraService, private dialoRef : MatDialogRef<CompraDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado : boolean){
    this.compraService.setConfirmaEliminacion(estado);
    this.dialoRef.close();
  }

}
