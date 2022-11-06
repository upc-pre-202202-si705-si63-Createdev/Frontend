import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Usuario } from 'src/app/model/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosDialogoComponent } from './usuarios-dialogo/usuarios-dialogo.component';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css'] 
})
export class UsuariosListarComponent implements OnInit {


  lista: Usuario[] = [];
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  displayedColumns:string[]=['idUsuarios','emailUsuarios','contrasenaUsuarios','nameUsuarios','lastnameUsuarios','telefonoUsuarios','direccionUsuarios','acciones','accion2'];
  private idMayor: number = 0;
  constructor(private ps: UsuariosService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=> {
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
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
    this.dialog.open(UsuariosDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });

  }

}
