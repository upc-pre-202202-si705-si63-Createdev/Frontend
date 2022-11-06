import { ClientesService } from './../../../service/clientes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesDialogoComponent } from './Clientes-dialogo/clientes-dialogo.component';



@Component({
  selector: 'app-clientes-listar',
  templateUrl: './clientes-listar.component.html',
  styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent implements OnInit {


  lista: Cliente[] = [];
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource();
  displayedColumns: string[] = ['idCliente', 'dni', 'usuarios', 'acciones','acciones2'];
  private idMayor: number = 0;
  constructor(private clientesService:ClientesService, private dialog:MatDialog ) { }

  ngOnInit(): void {

    this.clientesService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.clientesService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);

    });

    this.clientesService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ClientesDialogoComponent);
  }
  eliminar(id: number) {
    this.clientesService.eliminar(id).subscribe(() => {
      this.clientesService.listar().subscribe(data => {
        this.clientesService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }

}
