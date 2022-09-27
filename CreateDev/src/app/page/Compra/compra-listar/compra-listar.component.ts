import { CompraDialogoComponent } from './compra-dialogo/compra-dialogo.component';
import { CompraService } from 'src/app/service/compra.service';
import { Compra } from 'src/app/model/Compra';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-listar',
  templateUrl: './compra-listar.component.html',
  styleUrls: ['./compra-listar.component.css']
})
export class CompraListarComponent implements OnInit {

  dataSource: MatTableDataSource<Compra> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre_Cliente', 'Cantidad_Total',
    'Precio_Total', 'Peso_Total', 'Tipo_Comprobante', 'Fecha_Cancelacion', 'accion1','accion2'];

  idMayor: number = 0;


  constructor(private ps: CompraService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Compra[] | undefined) => {
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
    this.dialog.open(CompraDialogoComponent);

  }

  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
