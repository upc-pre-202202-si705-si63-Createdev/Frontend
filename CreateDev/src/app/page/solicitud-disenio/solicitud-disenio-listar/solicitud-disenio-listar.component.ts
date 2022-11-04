import { solicitud_disenio } from './../../../model/solicitud-disenio';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudDisenioService } from './../../../service/solicitud-disenio.service';

@Component({
  selector: 'app-solicitud-disenio-listar',
  templateUrl: './solicitud-disenio-listar.component.html',
  styleUrls: ['./solicitud-disenio-listar.component.css']
})
export class SolicitudDisenioListarComponent implements OnInit {

  lista: solicitud_disenio[] = [];
  dataSource: MatTableDataSource<solicitud_disenio> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'pedido', 'fecha'];
  private idMayor: number = 0;

  constructor(private solicitudDisenioService: SolicitudDisenioService) { }

  ngOnInit(): void {
    this.solicitudDisenioService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.solicitudDisenioService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
  }

}
