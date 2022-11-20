import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SolicitudesProducto } from 'src/app/model/solicitudes-producto';

@Component({
  selector: 'app-producto-cantidad-lugar',
  templateUrl: './producto-cantidad-lugar.component.html',
  styleUrls: ['./producto-cantidad-lugar.component.css']
})
export class ProductoCantidadLugarComponent implements OnInit {

  dataSource: MatTableDataSource<SolicitudesProducto> = new MatTableDataSource();
  displayedColumns: string[] = ['LugarFabricacion', 'Cantidad'];

  constructor(private proService: ProductoService) { }

  ngOnInit(): void {
    this.proService.buscarSolicitudesProducto().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
