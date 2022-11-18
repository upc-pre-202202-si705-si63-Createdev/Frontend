import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/Usuario';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-usuarios-correo',
  templateUrl: './usuarios-correo.component.html',
  styleUrls: ['./usuarios-correo.component.css']
})
export class UsuariosCorreoComponent implements OnInit {

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'email'];


  constructor(private pS:UsuariosService) { }

  ngOnInit(): void {

    this.pS.buscarcorreo().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);

    })
  }

}
