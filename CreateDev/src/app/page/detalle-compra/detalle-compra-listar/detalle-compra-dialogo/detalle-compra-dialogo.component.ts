import { DetalleCompraService } from './../../../../service/detalle-compra.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-compra-dialogo',
  templateUrl: './detalle-compra-dialogo.component.html',
  styleUrls: ['./detalle-compra-dialogo.component.css']
})
export class DetalleCompraDialogoComponent implements OnInit {

  constructor(private detacompra : DetalleCompraService, private dialoRef : MatDialogRef<DetalleCompraDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado : boolean){
    this.detacompra.setConfirmaEliminacion(estado);
    this.dialoRef.close();
  }


}
