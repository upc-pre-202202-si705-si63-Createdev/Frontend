import { ProductoService } from './../../../service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from './../../../model/Producto';
import { Component, OnInit } from '@angular/core';

import { ProductoDialogoComponent } from './Producto-dialogo/producto-dialogo/producto-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','stock','peso','precio_unitario','material','fecha_creacion','lugar_fabricacion', 'accion1','accion2']; //,'Tipo_Producto_id','artesanos_usuario_id'

  private idMayor: number = 0;

  constructor(private ps: ProductoService, private dialog: MatDialog) { }

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
    this.dialog.open(ProductoDialogoComponent);
  }
 
 
  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });
 
  }
 }