import { Pedido } from './../../../model/Pedido';
import { PedidoService } from './../../../service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-pedido-listar',
  templateUrl: './pedido-listar.component.html',
  styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Pedido> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'caracteristicas', 'estado'];
  constructor(private ps: PedidoService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
