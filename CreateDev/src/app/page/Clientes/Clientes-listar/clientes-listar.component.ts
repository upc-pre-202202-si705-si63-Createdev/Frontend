import { ClientesService } from './../../../service/clientes.service';
import { MatTableDataSource } from '@angular/material/table';
import { Clientes } from './../../../model/Clientes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-listar',
  templateUrl: './clientes-listar.component.html',
  styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent implements OnInit {

  dataSource: MatTableDataSource<Clientes> = new MatTableDataSource();
  displayedColumns:string[]=['usuarios_id','dni'];
  constructor(private ps: ClientesService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Clientes[] | undefined) => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
