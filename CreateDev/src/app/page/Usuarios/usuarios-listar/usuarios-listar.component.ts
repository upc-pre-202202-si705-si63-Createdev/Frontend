import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuarios } from 'src/app/model/Usuario';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit {

  dataSource: MatTableDataSource<Usuarios> = new MatTableDataSource();
  displayedColumns:string[]=['id','correo','contrasenia','nombre','apellidos','telefono','direccion','acciones'];
  constructor(private ps: UsuariosService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Usuarios[] | undefined) => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    
  }

}
