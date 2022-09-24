import { PedidoService } from './../../../service/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-pedido-creaedita',
  templateUrl: './pedido-creaedita.component.html',
  styleUrls: ['./pedido-creaedita.component.css']
})
export class PedidoCreaeditaComponent implements OnInit {
  pedido: Pedido = new Pedido();
  mensaje: string = "";

  constructor(private PedidoService: PedidoService, private router: Router) { }

  ngOnInit(): void {
  }
  aceptar(): void {
    if (this.pedido.caracteristicas.length > 0 && this.pedido.estado.length > 0 && this.pedido.nombre.length > 0) {

      this.PedidoService.insertar(this.pedido).subscribe(data => {
        this.PedidoService.listar().subscribe(data => {
          this.PedidoService.setLista(data);
        })
      })
      this.router.navigate(['pedido']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
}
