import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Artesano } from 'src/app/model/Artesanos';
import { Usuario } from 'src/app/model/Usuario';
import { ArtesanosService } from 'src/app/service/artesanos.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import * as moment from 'moment';

@Component({
  selector: 'app-artesanos-creaedita',
  templateUrl: './artesanos-creaedita.component.html',
  styleUrls: ['./artesanos-creaedita.component.css']
})
export class ArtesanosCreaeditaComponent implements OnInit {
  artesanos: Artesano = new Artesano();
  id: number = 0;
  edicion: boolean = false;
  listaUsuarios: Usuario[] = [];
  idUsuarioSeleccionado: number = 0;
  mensaje: string = "";
  mensaje1: string = "";

  constructor(private ArtesanosService: ArtesanosService,
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
    if (this.artesanos.provincia.length > 0 &&
      this.idUsuarioSeleccionado>0) {
      let p = new Usuario();
      p.idUsuarios = this.idUsuarioSeleccionado;
      this.artesanos.usuario = p;
      
      if (this.edicion) {
        this.ArtesanosService.modificar(this.artesanos).subscribe(() => {
          this.ArtesanosService.listar().subscribe(data => {
            this.ArtesanosService.setLista(data);
          });
        });

      } else {
        console.log("ingreso");
        this.ArtesanosService.insertar(this.artesanos).subscribe(() => {
          this.ArtesanosService.listar().subscribe(data => {
            this.ArtesanosService.setLista(data);
          })
        });
      }
      this.router.navigate(['/home/login/page/artesanos']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.ArtesanosService.listarID(this.id).subscribe(data => {
        this.artesanos = data
        console.log(data);
       this.idUsuarioSeleccionado = data.usuario.idUsuarios;
      });

    }

  }

}
