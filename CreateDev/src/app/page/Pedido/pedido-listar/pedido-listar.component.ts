import { Pedido } from './../../../model/Pedido';
import { PedidoService } from './../../../service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PedidoDialogoComponent } from './pedido-dialogo/pedido-dialogo.component';

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pedido> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'caracteristicas', 'estado', 'accion1', 'accion2'];
  private idMayor: number = 0;
  constructor(private ps: PedidoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PedidoDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });

  }

}
