import { SolicitudesArtesano } from './../../../model/solicitudes-artesano';
import { SolicitudDisenioService } from 'src/app/service/solicitud-disenio.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-solicitud-disenio-artesanos',
  templateUrl: './solicitud-disenio-artesanos.component.html',
  styleUrls: ['./solicitud-disenio-artesanos.component.css']
})
export class SolicitudDisenioArtesanosComponent implements OnInit {

  dataSource: MatTableDataSource<SolicitudesArtesano> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'email', 'provincia', 'cantidad'];
  constructor(private solService: SolicitudDisenioService) { }

  ngOnInit(): void {
    this.solService.buscarSolicitudesArtesanos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
