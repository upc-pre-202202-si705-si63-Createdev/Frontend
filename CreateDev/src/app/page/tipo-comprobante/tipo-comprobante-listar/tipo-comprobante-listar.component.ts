import { Component, OnInit } from '@angular/core';
import { TipoComporbanteService } from 'src/app/service/tipo-comporbante.service';
import { Tipo_Comprobante } from 'src/app/model/tipo-comprobante';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-tipo-comprobante-listar',
  templateUrl: './tipo-comprobante-listar.component.html',
  styleUrls: ['./tipo-comprobante-listar.component.css']
})
export class TipoComprobanteListarComponent implements OnInit {

  dataSource: MatTableDataSource<Tipo_Comprobante> = new MatTableDataSource();
  displayedColumns:string[]=['id','tipo'];
  constructor(private ps: TipoComporbanteService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Tipo_Comprobante[] | undefined) => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  }

