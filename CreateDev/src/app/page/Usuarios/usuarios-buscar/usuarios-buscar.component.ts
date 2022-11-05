import { Usuario } from '../../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-usuarios-buscar',
  templateUrl: './usuarios-buscar.component.html',
  styleUrls: ['./usuarios-buscar.component.css']
})
export class UsuariosBuscarComponent implements OnInit {
  textoBuscar: string = ""

  constructor(private UsuariosService:UsuariosService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array: Usuario[] = [];
    this.UsuariosService.listar().subscribe(data => {
      data.forEach((element, index) => {  
        if (element.nombre.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.UsuariosService.setLista(array);
    })
  }

}
