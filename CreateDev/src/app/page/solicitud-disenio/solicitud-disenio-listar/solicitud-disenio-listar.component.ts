import { solicitud_disenio } from './../../../model/solicitud-disenio';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudDisenioService } from './../../../service/solicitud-disenio.service';
import { SolicitudDisenioDialogoComponent } from './solicitud-disenio-dialogo/solicitud-disenio-dialogo.component';

@Component({
  selector: 'app-solicitud-disenio-listar',
  templateUrl: './solicitud-disenio-listar.component.html',
  styleUrls: ['./solicitud-disenio-listar.component.css']
})
export class SolicitudDisenioListarComponent implements OnInit {

  lista: solicitud_disenio[] = [];
  dataSource: MatTableDataSource<solicitud_disenio> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'artesano', 'cliente', 'pedido', 'fecha', 'accion1', 'accion2'];
  private idMayor: number = 0;

  constructor(private solService: SolicitudDisenioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.solService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.solService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });

    this.solService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(SolicitudDisenioDialogoComponent);
  }


  eliminar(id: number) {
    this.solService.eliminar(id).subscribe(() => {
      this.solService.listar().subscribe(data => {
        this.solService.setLista(data);
      });
    });

  }

}
