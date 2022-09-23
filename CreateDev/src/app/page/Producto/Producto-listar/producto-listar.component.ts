import { ProductoService } from './../../../service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from './../../../model/Producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','stock','peso','precio_unitario','material','fecha_creacion','lugar_fabricacion','Tipo_Producto_id','artesanos_usuario_id'];
  constructor(private ps: ProductoService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Producto[] | undefined) => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
