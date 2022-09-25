import { TipoComporbanteService } from 'src/app/service/tipo-comporbante.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tipo-comprobante-dialogo',
  templateUrl: './tipo-comprobante-dialogo.component.html',
  styleUrls: ['./tipo-comprobante-dialogo.component.css']
})
export class TipoComprobanteDialogoComponent implements OnInit {

  constructor(private TipoComporbanteService: TipoComporbanteService,
    private dialogRef: MatDialogRef<TipoComprobanteDialogoComponent>) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.TipoComporbanteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

} 
