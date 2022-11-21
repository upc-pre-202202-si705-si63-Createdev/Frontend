import { DetalleCompraService } from './../../../service/detalle-compra.service';
import { RespuestaCompra } from './../../../model/RespuestaCompra';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalle-compra-query1',
  templateUrl: './detalle-compra-query1.component.html',
  styleUrls: ['./detalle-compra-query1.component.css']
})
export class DetalleCompraQuery1Component implements OnInit {
  
  dataSource: MatTableDataSource<RespuestaCompra> = new MatTableDataSource();

  displayedColumns: string[] = ['nombreCompra', 'cantidad','precio_unitario','tipo_producto'];
  constructor(private detallecomService : DetalleCompraService) { }

  ngOnInit(): void {

    this.detallecomService.query1().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
