import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Usuario } from 'src/app/model/Usuario';
import { ClientesService } from 'src/app/service/clientes.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import * as moment from 'moment';



@Component({
  selector: 'app-clientes-creaedita',
  templateUrl: './clientes-creaedita.component.html',
  styleUrls: ['./clientes-creaedita.component.css']
})
export class ClientesCreaeditaComponent implements OnInit {
  clientes: Cliente = new Cliente();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";

  constructor(private clienteservice: ClientesService,
    private route: ActivatedRoute,
    private router: Router, private usuarioservice:UsuariosService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();


    });
    this.usuarioservice.listar().subscribe(data => { this.listaUsuarios = data });

  }
  aceptar() {
    if (this.clientes.dni.length > 0 &&
      this.idUsuarioSeleccionado>0) {
      let p = new Usuario();
      p.idUsuarios = this.idUsuarioSeleccionado;
      this.clientes.usuario = p;
      
      if (this.edicion) {
        this.clienteservice.modificar(this.clientes).subscribe(() => {
          this.clienteservice.listar().subscribe(data => {
            this.clienteservice.setLista(data);
          });
        });

      } else {
        console.log("ingreso");
        this.clienteservice.insertar(this.clientes).subscribe(() => {
          this.clienteservice.listar().subscribe(data => {
            this.clienteservice.setLista(data);
          })
        });
      }
      this.router.navigate(['/home/page/clientes']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.clienteservice.listarId(this.id).subscribe(data => {
        this.clientes = data
        console.log(data);
       this.idUsuarioSeleccionado = data.usuario.idUsuarios;
      });

    }

  }

}
