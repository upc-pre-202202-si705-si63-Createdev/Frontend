import { SolicitudesRecientes } from './../../../model/solicitudes-recientes';
import { SolicitudDisenioService } from 'src/app/service/solicitud-disenio.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-solicitud-disenio-recientes',
  templateUrl: './solicitud-disenio-recientes.component.html',
  styleUrls: ['./solicitud-disenio-recientes.component.css']
})
export class SolicitudDisenioRecientesComponent implements OnInit {

  dataSource: MatTableDataSource<SolicitudesRecientes> = new MatTableDataSource();
  displayedColumns: string[] = ['pedido', 'caracteristicas', 'estado', 'fecha'];
  constructor(private solService: SolicitudDisenioService) { }

  ngOnInit(): void {
    this.solService.buscarSolicitudesRecientes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
