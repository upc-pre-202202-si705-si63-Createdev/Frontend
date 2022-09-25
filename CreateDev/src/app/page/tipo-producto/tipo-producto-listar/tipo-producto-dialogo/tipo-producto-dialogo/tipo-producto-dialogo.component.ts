import { Component, OnInit } from '@angular/core';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-producto-dialogo',
  templateUrl: './tipo-producto-dialogo.component.html',
  styleUrls: ['./tipo-producto-dialogo.component.css']
})
export class TipoProductoDialogoComponent implements OnInit {

  constructor(private tipo_productoService: TipoProductoService,
    private dialogRef: MatDialogRef<TipoProductoDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.tipo_productoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
