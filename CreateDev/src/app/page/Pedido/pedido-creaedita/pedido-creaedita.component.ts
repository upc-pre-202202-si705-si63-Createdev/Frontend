import { PedidoService } from 'src/app/service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-pedido-creaedita',
  templateUrl: './pedido-creaedita.component.html',
  styleUrls: ['./pedido-creaedita.component.css']
})
export class PedidoCreaeditaComponent implements OnInit {
  pedido: Pedido = new Pedido();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private PedidoService: PedidoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.pedido.nombre.length > 0 && this.pedido.caracteristicas.length > 0 && this.pedido.estado.length > 0) {
      if (this.edicion) {
        this.PedidoService.modificar(this.pedido).subscribe(data => {
          this.PedidoService.listar().subscribe(data => {
            this.PedidoService.setLista(data);
          })
        })
      } else {

        this.PedidoService.insertar(this.pedido).subscribe(data => {
          this.PedidoService.listar().subscribe(data => {
            this.PedidoService.setLista(data);
          })
        })
      }
      this.router.navigate(['home/page/pedido']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }


  init() {
    if (this.edicion) {
      this.PedidoService.listarId(this.id).subscribe(data => {
        this.pedido = data;
      })
    }

  }
}
