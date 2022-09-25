import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Tipo_Producto } from 'src/app/model/tipo-producto';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';

@Component({
  selector: 'app-tipo-producto-listar',
  templateUrl: './tipo-producto-listar.component.html',
  styleUrls: ['./tipo-producto-listar.component.css']
})
export class TipoProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Tipo_Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id','tipo'];

  constructor(private tps: TipoProductoService) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
   })
   this.tps.getLista().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
   });
 }

}
