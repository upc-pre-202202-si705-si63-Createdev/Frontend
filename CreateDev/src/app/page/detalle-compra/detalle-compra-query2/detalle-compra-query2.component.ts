import { DetalleCompraService } from './../../../service/detalle-compra.service';
import { RespuestaCompra2 } from './../../../model/RespuestaCompra2';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalle-compra-query2',
  templateUrl: './detalle-compra-query2.component.html',
  styleUrls: ['./detalle-compra-query2.component.css']
})
export class DetalleCompraQuery2Component implements OnInit {
  dataSource: MatTableDataSource<RespuestaCompra2> = new MatTableDataSource();

  displayedColumns: string[] = ['cliente', 'cantidad','nombreArtesano'];
  
  constructor(private detacompraService : DetalleCompraService) { }

  ngOnInit(): void {
    this.detacompraService.query2().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
