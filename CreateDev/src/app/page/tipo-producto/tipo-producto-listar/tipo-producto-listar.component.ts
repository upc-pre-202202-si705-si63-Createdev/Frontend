import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Tipo_Producto } from 'src/app/model/tipo-producto';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';
import { TipoProductoDialogoComponent } from './tipo-producto-dialogo/tipo-producto-dialogo/tipo-producto-dialogo.component';

@Component({
  selector: 'app-tipo-producto-listar',
  templateUrl: './tipo-producto-listar.component.html',
  styleUrls: ['./tipo-producto-listar.component.css']
})
export class TipoProductoListarComponent implements OnInit {

  dataSource: MatTableDataSource<Tipo_Producto> = new MatTableDataSource();
  displayedColumns:string[]=['id','tipo', 'accion1','accion2'];
  private idMayor: number = 0;

  constructor(private tps: TipoProductoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tps.listar().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
   })
   this.tps.getLista().subscribe(data => {
     this.dataSource = new MatTableDataSource(data);
   });

   this.tps.getConfirmaEliminacion().subscribe(data => {
     data == true ? this.eliminar(this.idMayor) : false;
   });


 }
 confirmar(id: number) {
   this.idMayor = id;
   this.dialog.open(TipoProductoDialogoComponent);
 }


 eliminar(id: number) {
   this.tps.eliminar(id).subscribe(() => {
     this.tps.listar().subscribe(data => {
       this.tps.setLista(data);/* se ejecuta la línea 27*/
     });
   });

 }
}