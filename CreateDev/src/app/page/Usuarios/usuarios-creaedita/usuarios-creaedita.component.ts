import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-usuarios-creaedita',
  templateUrl: './usuarios-creaedita.component.html',
  styleUrls: ['./usuarios-creaedita.component.css']
})
export class UsuariosCreaeditaComponent implements OnInit {
  Usuarios: Usuario = new Usuario();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private UsuariosService: UsuariosService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }


  aceptar(): void {
    if (this.Usuarios.emailUsuarios.length > 0 && this.Usuarios.contrasenaUsuarios.length > 0) {
      if (this.edicion) {
        this.UsuariosService.modificar(this.Usuarios).subscribe(data => {
          this.UsuariosService.listar().subscribe(data => {
            this.UsuariosService.setLista(data);
          })
        })
      } else {

        this.UsuariosService.insertar(this.Usuarios).subscribe(data => {
          this.UsuariosService.listar().subscribe(data => {
            this.UsuariosService.setLista(data);
          })
        })
      }
      this.router.navigate(['/home/page/Usuarios']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.UsuariosService.listarId(this.id).subscribe(data => {
        this.Usuarios = data;
      })
    }

  }
}
