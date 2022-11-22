import { DetalleCompraDialogoComponent } from './detalle-compra-dialogo/detalle-compra-dialogo.component';
import { DetalleCompraService } from './../../../service/detalle-compra.service';
import { detalle_compra } from './../../../model/detalle-compra';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-compra-listar',
  templateUrl: './detalle-compra-listar.component.html',
  styleUrls: ['./detalle-compra-listar.component.css']
})
export class DetalleCompraListarComponent implements OnInit {

  dataSource: MatTableDataSource<detalle_compra> = new MatTableDataSource();
  displayedColumns: string[] = ['id','idCompra','cantidad','idProducto','precio_unitario','accion1','accion2'];

  idMayor: number = 0;
  constructor(private ps: DetalleCompraService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DetalleCompraDialogoComponent);

  }
  
 

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }

}
