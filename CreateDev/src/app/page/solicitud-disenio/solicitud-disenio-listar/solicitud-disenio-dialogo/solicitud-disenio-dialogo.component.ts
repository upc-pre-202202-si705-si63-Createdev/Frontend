import { Component, OnInit } from '@angular/core';
import { SolicitudDisenioService } from 'src/app/service/solicitud-disenio.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitud-disenio-dialogo',
  templateUrl: './solicitud-disenio-dialogo.component.html',
  styleUrls: ['./solicitud-disenio-dialogo.component.css']
})
export class SolicitudDisenioDialogoComponent implements OnInit {

  constructor(private solicitudService: SolicitudDisenioService,
    private dialogRef: MatDialogRef<SolicitudDisenioDialogoComponent>
  ) { }

  ngOnInit(): void { }
  confirmar(estado: boolean) {
    this.solicitudService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
